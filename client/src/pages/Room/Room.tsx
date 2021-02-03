// @ts-nocheck

import React, { useEffect, useState, useRef } from 'react';
import RoomNavbar from '../../components/Room-navbar/Room-navbar';
import RoomVideo from '../../components/Room-video/RoomVideo';
import { RoomContainer, RoomChatAndUsers, RoomChatAndUsersItems, ItemExtends } from './Room.styles';
import Peer from 'simple-peer';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { AudioProvider } from './../../context/Audio';
import { ENDPOINT, socket } from '../../components/constant/socket';
import ChatBar from '../../components/chatbar/ChatBar';
import Draggable from 'react-draggable';

const Room: React.FC = ({ match }: any) => {
    const [stream, setStream] = useState({});
    const userVideo = useRef(null);
    const peersRef = useRef([]);
    const [peers, setPeers] = useState([]);
    const handle = useFullScreenHandle();
    const [chatBar, setChatBar] = useState(false);
    console.log('ref', peersRef);

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
                console.log('users', users);
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

            // socket.on('user left', (id) => {
            //     const peerObj = peersRef.current.find((p) => p.peerID === id);
            //     console.log(peerObj);
            //     if (peerObj) {
            //         peerObj.peer.destroy();
            //     }

            //     const peers = peersRef.current.filter((p) => p.peerID !== id);
            //     peersRef.current = peers;
            //     setPeers(peers);
            // });
        });
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

    // @ts-ignore: Unreachable code error

    console.log('PEERS', peers);
    console.log('PEERS Ref', peersRef);

    console.log('stream', stream);

    return (
        <FullScreen handle={handle}>
            <div style={{ width: '100vw', height: '100vh', display: 'none' }}>
                <Draggable bounds="parent">
                    <div style={{ width: '1rem' }}>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>
            </div>
            <RoomContainer>
                {chatBar ? (
                    ''
                ) : (
                    <RoomChatAndUsers>
                        <RoomChatAndUsersItems>
                            <i className="text-2xl text-white fas fa-users"></i>
                            <ItemExtends>
                                <span style={{ fontSize: '.7rem' }}>10</span>
                            </ItemExtends>
                        </RoomChatAndUsersItems>
                        <RoomChatAndUsersItems
                            onClick={() => setChatBar(!chatBar)}
                            style={{ borderLeft: '1px solid rgba(255,255,255,.2)' }}
                        >
                            <i className="text-2xl text-white fas fa-comment-dots"></i>
                            <ItemExtends>
                                <span style={{ fontSize: '.7rem' }}>5</span>
                            </ItemExtends>
                        </RoomChatAndUsersItems>
                    </RoomChatAndUsers>
                )}
                <AudioProvider>
                    <RoomVideo userVideo={userVideo} peers={peers} stream={stream} chatBar={chatBar} />
                    <RoomNavbar stream={stream} peers={peersRef} userVideo={userVideo} handle={handle} />
                </AudioProvider>
            </RoomContainer>
        </FullScreen>
    );
};

export default Room;
