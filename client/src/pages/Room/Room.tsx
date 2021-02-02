import React, { useEffect, useState, useRef } from 'react';
import RoomNavbar from '../../components/Room-navbar/Room-navbar';
import RoomVideo from '../../components/Room-video/RoomVideo';
import { RoomContainer, RoomChatAndUsers, RoomChatAndUsersItems, ItemExtends } from './Room.styles';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const ENDPOINT = 'http://localhost:5000/';

const Room: React.FC = ({ match }: any) => {
    const [stream, setStream] = useState({});
    const userVideo = useRef(null);
    const peersRef = useRef([]);
    const [peers, setPeers] = useState([]);

    let socket = io(ENDPOINT);

    useEffect(() => {
        const roomId = match.params.id;
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream);

            userVideo.current.srcObject = stream;
            socket.emit('join', roomId, (error) => {
                if (error) {
                    alert(error);
                }
            });
            socket.on('all users', (users) => {
                const peers = [];
                users.forEach((userID) => {
                    const peer = createPeer(userID, socket.id, stream);
                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    });
                    peers.push(peer);
                });
                setPeers(peers);
            });
            socket.on('user joined', (payload) => {
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                });

                setPeers((users) => [...users, peer]);
            });

            socket.on('receiving returned signal', (payload) => {
                const item = peersRef.current.find((p) => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });

            socket.on('disconnect', () => {
                console.log('yoo disconnect');
            });
        });
        console.log(socket);
    }, [ENDPOINT]);

    function createPeer(userToSignal: any, callerID: any, stream: any) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on('signal', (signal) => {
            socket.emit('sending signal', { userToSignal, callerID, signal });
        });

        return peer;
    }
    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        });

        peer.on('signal', (signal) => {
            socket.emit('returning signal', { signal, callerID });
        });

        peer.signal(incomingSignal);

        return peer;
    }
    console.log(stream);

    return (
        <RoomContainer>
            <RoomChatAndUsers>
                <RoomChatAndUsersItems>
                    <i className="text-2xl text-white fas fa-users"></i>
                    <ItemExtends>
                        <span style={{ fontSize: '.7rem' }}>10</span>
                    </ItemExtends>
                </RoomChatAndUsersItems>
                <RoomChatAndUsersItems style={{ borderLeft: '1px solid rgba(255,255,255,.2)' }}>
                    <i className="text-2xl text-white fas fa-comment-dots"></i>
                    <ItemExtends>
                        <span style={{ fontSize: '.7rem' }}>5</span>
                    </ItemExtends>
                </RoomChatAndUsersItems>
            </RoomChatAndUsers>
            <RoomVideo userVideo={userVideo} peers={peers} />
            <RoomNavbar stream={stream} />
        </RoomContainer>
    );
};

export default Room;
