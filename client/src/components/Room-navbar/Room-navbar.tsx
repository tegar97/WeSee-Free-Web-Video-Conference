import React, { useState } from 'react';
import { useAudio } from '../../context/Audio';
import SettingApp from '../settings/settings';
import { RoomNavbarContainer, RoomNavbarItems } from './Room-navbar.styles';
import { useMediaQuery } from 'react-responsive';
import RoomNavbarMobile from '../../room-navbar-mobile/room-navbar-mobile';
import { useShareScreen } from '../../context/ShareScreenContext';
import { socket } from '../constant/socket';
import WhiteBoard from './../Whiteboard/WhiteBoard';
function RoomNavbar({ stream, peers, handle, userVideo, RoomCode }: any) {
    const [videoMuted, setVideoMuted] = useState(false);
    const [isFullscreen, setIsFullScreen] = useState(false);
    const [RoomInfo, SetRoomInfo] = useState(false);
    const [RoomNavMenu, SetRoomNavMenu] = useState(false);
    const { audioMuted, setAudioMuted }: any = useAudio();
    // const [intervalGoinOn, setIntervalGoinOn] = useState(false);
    const { isShareScreen }: any = useShareScreen();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    console.log(isShareScreen);

    // useEffect(() => {
    //     const navbar = document.getElementById('navbar');

    //     navbar.onmouseover = function () {
    //         navbar.style.opacity = '1';
    //     };
    //     navbar.onmouseout = function () {
    //         if (intervalGoinOn) return;
    //         setIntervalGoinOn(true);
    //         setTimeout(function () {
    //             navbar.style.opacity = '0';
    //             setIntervalGoinOn(false);
    //         }, 10000);
    //     };
    // }, [intervalGoinOn]);

    function toggleMuteVideo() {
        if (stream) {
            setVideoMuted(!videoMuted);
            stream.getVideoTracks()[0].enabled = videoMuted;
        }
    }
    function muteAudio() {
        if (stream) {
            setAudioMuted(!audioMuted);
            stream.getAudioTracks()[0].enabled = audioMuted;
        }
    }

    function handleFullScreen() {
        setIsFullScreen(!isFullscreen);
        if (isFullscreen) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            handle.enter();
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            handle.exit();
        }
    }

    const leaveMeeting = () => {
        window.location.assign('/');

        // peers.current.destroy();
        // socket.emit('disconnect');
        // window.location.reload();
    };

    function shareScreen() {
        // @ts-ignore

        navigator.mediaDevices.getDisplayMedia({ cursor: true }).then((screenStream) => {
            if (!peers.current[0]) {
                userVideo.current.srcObject = screenStream;
            } else {
                peers.current[0].peer.replaceTrack(
                    stream.getVideoTracks()[0],
                    screenStream.getVideoTracks()[0],
                    stream,
                );
                userVideo.current.srcObject = screenStream;
            }

            socket.emit('shareScreen', true);

            screenStream.getTracks()[0].onended = () => {
                if (!peers.current[0]) {
                    userVideo.current.srcObject = stream;
                } else {
                    peers.current[0].peer.replaceTrack(
                        screenStream.getVideoTracks()[0],
                        stream.getVideoTracks()[0],
                        stream,
                    );

                    userVideo.current.srcObject = stream;
                }
                socket.emit('shareScreen', false);
            };
        });
    }

    return (
        <>
            {isTabletOrMobile ? (
                <div className="absolute bottom-0 flex flex-row justify-center w-full p-5">
                    <RoomNavbarMobile
                        leaveMeeting={leaveMeeting}
                        toggleMuteVideo={toggleMuteVideo}
                        muteAudio={muteAudio}
                        audioMuted={audioMuted}
                        videoMuted={videoMuted}
                    />
                </div>
            ) : (
                <RoomNavbarContainer id="navbar">
                    <div className="relative self-center">
                        <button className="text-lg text-white outline-none" onClick={() => SetRoomInfo(!RoomInfo)}>
                            Room Info
                        </button>
                        <div
                            className="absolute "
                            style={{
                                backgroundColor: '#191b28',
                                minWidth: '400px',
                                transition: '.8s all',
                                bottom: RoomInfo ? '60px' : '-200px',
                                display: RoomInfo ? 'flex' : 'none',
                                color: '#fff',
                                border: '5px',
                                padding: '1rem',
                                flexDirection: 'column',
                            }}
                        >
                            <div className="flex flex-col">
                                <span className="mb-2">Info Akses :</span>
                                <span className="text-sm">{window.location.href}</span>
                            </div>
                            <div className="flex flex-col mt-2">
                                <span className="mb-2">Code Room</span>
                                <span>{RoomCode}</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-10">
                        <RoomNavbarItems onClick={muteAudio}>
                            {audioMuted ? (
                                <i data-tip="Turn on mic" className="text-xl text-red-500 fas fa-microphone"></i>
                            ) : (
                                <i data-tip="Turn off mic" className="text-xl text-white fas fa-microphone"></i>
                            )}
                        </RoomNavbarItems>
                        <RoomNavbarItems onClick={toggleMuteVideo}>
                            {videoMuted ? (
                                <i data-tip="Turn on camera" className="text-xl text-red-500 fas fa-video"></i>
                            ) : (
                                <i data-tip="Turn off camera" className="text-xl text-white fas fa-video"></i>
                            )}
                        </RoomNavbarItems>
                        <div className="flex items-center" style={{ gridColumn: '3/5', width: '100%' }}>
                            <button
                                style={{ borderRadius: '5px' }}
                                className="px-2 py-3 font-bold text-white transition duration-300 ease-in-out bg-red-600 w-100 hover:bg-red-500 "
                                onClick={() => leaveMeeting()}
                            >
                                Leave Meeting
                            </button>
                        </div>
                        <RoomNavbarItems onClick={handleFullScreen}>
                            {isFullscreen ? (
                                <i
                                    data-tip="Enter Full Screen"
                                    className="text-xl text-white fas fa-expand-arrows-alt"
                                ></i>
                            ) : (
                                <i
                                    data-tip="Exit Full Screen"
                                    className="text-xl text-white fas fa-compress-arrows-alt"
                                ></i>
                            )}
                        </RoomNavbarItems>
                        {isShareScreen ? (
                            <RoomNavbarItems>
                                <i className="text-xl text-red-500 fas fa-desktop"></i>
                            </RoomNavbarItems>
                        ) : (
                            <RoomNavbarItems onClick={shareScreen}>
                                <i className="text-xl text-white fas fa-desktop"></i>
                            </RoomNavbarItems>
                        )}
                    </div>

                    <RoomNavbarItems className="relative self-center">
                        <button
                            className="w-full text-lg text-white outline-none"
                            onClick={() => SetRoomNavMenu(!RoomNavMenu)}
                        >
                            <i data-tip="Menu" className="p-1 text-xl text-white fas fa-ellipsis-v"></i>
                        </button>
                        <div
                            className="absolute "
                            style={{
                                backgroundColor: '#191b28',
                                minWidth: '200px',
                                transition: '.8s all',
                                right: 0,
                                bottom: RoomNavMenu ? '70px' : '-200px',
                                display: RoomNavMenu ? 'flex' : 'none',
                                color: '#fff',
                                border: '5px',
                                flexDirection: 'column',
                            }}
                        >
                            <div>
                                <ul className="flex flex-col justify-center">
                                    <WhiteBoard RoomCode={RoomCode}>
                                        <li className="w-full p-4 mb-3 hover:bg-blue-600">
                                            <div className="flex flex-row items-center cursor-pointer">
                                                <i data-tip="settings" className="text-white text-md fas fa-cog"></i>
                                                <span className="ml-3 text-md"> WhiteBoard [BETA]</span>
                                            </div>
                                        </li>
                                    </WhiteBoard>
                                    <SettingApp stream={stream} peers={peers} userVideo={userVideo}>
                                        <li className="w-full p-4 hover:bg-blue-600">
                                            <div className="flex flex-row items-center cursor-pointer">
                                                <i data-tip="settings" className="text-white text-md fas fa-cog"></i>
                                                <span className="ml-3 text-md"> Settings</span>
                                            </div>
                                        </li>
                                    </SettingApp>
                                </ul>
                            </div>
                        </div>
                    </RoomNavbarItems>
                </RoomNavbarContainer>
            )}
        </>
    );
}

export default RoomNavbar;
