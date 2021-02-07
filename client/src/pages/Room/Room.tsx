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
import { useAuth } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import queryString from 'query-string';
import { useMessage } from '../../context/chatMessage';
import { Howl } from 'howler';
import ringtone from './../../sounds/enterRoom.mp3';
import hark from 'hark';
const ringtoneSound = new Howl({
    src: [ringtone],
    loop: false,
});

const Room: React.FC = ({ match, location }: any) => {
    const { messages, setMessages } = useMessage();
    const { users } = useAuth();

    const [stream, setStream] = useState({});
    const userVideo = useRef(null);
    const peersRef = useRef([]);
    const [peers, setPeers] = useState([]);
    const [peers2, setPeers2] = useState([]);
    const handle = useFullScreenHandle();
    const [roomMenu, setRoomMenu] = useState(false);
    const [isScreenShare, setIsScreenShare] = useState(false);
    const screenShareRef = useRef(null);
    const [menuUser, setUserMenu] = useState(false);

    let [systemMessage, setSystemMessage] = useState({});
    const { currentUser } = useAuth();
    const name = currentUser.displayName;
    const room = match.params.id;

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream);

            screenShareRef.current = stream;
            userVideo.current.srcObject = stream;

            socket.emit('join', { name, room }, (error) => {
                ringtoneSound.play();

                if (error) {
                    alert(error);
                }
            });
            socket.on('all users', (users) => {
                const peers = [];
                users.forEach((userID) => {
                    console.log('users', userID.id);
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

            //     const peers = peersRef.current.filter((p) => p.peerID !== id)
            //     console.log('afasf', peers);
            //     peersRef.current = peers;
            //     setPeers(peers);
            //     console.log(peers)
            // });
        });
    }, [ENDPOINT]);
    useEffect(() => {
        // var options = {};
        // var speechEvents = hark(, options);
        // speechEvents.on('speaking', function () {
        //     console.log('yooo');
        // });
        // speechEvents.on('stopped_speaking', function () {
        //     console.log('stopped_speaking');
        // console.log('2', peersRef);
    }, []);
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((messages) => [...messages, message]);
            if (message.user === 'system') {
                toast.info(message.text);
            }
        });
    }, []);

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

    return (
        <FullScreen handle={handle}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />

            <RoomContainer>
                <RoomChatAndUsers>
                    <RoomChatAndUsersItems onClick={() => setUserMenu(!menuUser)}>
                        <i className="text-2xl text-white fas fa-users"></i>
                        <ItemExtends>
                            <span style={{ fontSize: '.7rem' }}>{users.length}</span>
                        </ItemExtends>
                    </RoomChatAndUsersItems>
                    <RoomChatAndUsersItems
                        onClick={() => setRoomMenu(!roomMenu)}
                        style={{ borderLeft: '1px solid rgba(255,255,255,.2)' }}
                    >
                        <i className="text-2xl text-white fas fa-comment-dots"></i>
                        <ItemExtends>
                            <span style={{ fontSize: '.7rem' }}>
                                {messages.filter((m) => m.user !== 'system').length}
                            </span>
                        </ItemExtends>
                    </RoomChatAndUsersItems>
                </RoomChatAndUsers>

                <AudioProvider>
                    <RoomVideo
                        userVideo={userVideo}
                        peers={peers}
                        stream={stream}
                        roomMenu={roomMenu}
                        setRoomMenu={setRoomMenu}
                        setUserMenu={setUserMenu}
                        menuUser={menuUser}
                        isScreenShare={isScreenShare}
                        screenShareRef={screenShareRef}
                    />
                    <RoomNavbar
                        isScreenShare={isScreenShare}
                        setIsScreenShare={setIsScreenShare}
                        stream={stream}
                        peers={peersRef}
                        userVideo={userVideo}
                        handle={handle}
                        screenShareRef={screenShareRef}
                    />
                </AudioProvider>
            </RoomContainer>
        </FullScreen>
    );
};

export default Room;
