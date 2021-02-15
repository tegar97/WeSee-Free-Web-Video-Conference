import React, { useState } from 'react';
import { useAudio } from '../../context/Audio';
import SettingApp from '../settings/settings';
import { RoomNavbarContainer, RoomNavbarItems } from './Room-navbar.styles';
import { useMediaQuery } from 'react-responsive';

function RoomNavbar({ stream, peers, handle, userVideo, history, RoomCode }: any) {
    const [videoMuted, setVideoMuted] = useState(false);
    const [isFullscreen, setIsFullScreen] = useState(false);
    const [RoomInfo, SetRoomInfo] = useState(false);
    const { audioMuted, setAudioMuted }: any = useAudio();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    console.log(history);

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
            };
        });
    }
    return (
        <>
            {isTabletOrMobile ? (
                <div
                    className="absolute bottom-0 flex flex-row justify-between w-full p-5"
                    style={{ backgroundColor: '#1C1F2E' }}
                >
                    <RoomNavbarItems onClick={muteAudio}>
                        {audioMuted ? (
                            <i data-tip="Turn on mic" className="text-xl text-red-500 fas fa-microphone"></i>
                        ) : (
                            <i data-tip="Turn off mic" className="text-xl text-white fas fa-microphone"></i>
                        )}
                    </RoomNavbarItems>
                    <div className="flex items-center justify-center" style={{ gridColumn: '3/5', width: '100%' }}>
                        <button
                            style={{ borderRadius: '5px' }}
                            className="px-2 py-3 font-bold text-white transition duration-300 ease-in-out bg-red-600 w-100 hover:bg-red-500 "
                            onClick={() => leaveMeeting()}
                        >
                            Leave Meeting
                        </button>
                    </div>
                    <RoomNavbarItems onClick={toggleMuteVideo}>
                        {videoMuted ? (
                            <i data-tip="Turn on camera" className="text-xl text-red-500 fas fa-video"></i>
                        ) : (
                            <i data-tip="Turn off camera" className="text-xl text-white fas fa-video"></i>
                        )}
                    </RoomNavbarItems>
                </div>
            ) : (
                <RoomNavbarContainer>
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
                        <RoomNavbarItems onClick={shareScreen}>
                            <i className="text-xl text-white fas fa-desktop"></i>
                        </RoomNavbarItems>
                    </div>
                    <SettingApp stream={stream} peers={peers} userVideo={userVideo}>
                        <div className="flex flex-col items-center cursor-pointer">
                            <i data-tip="settings" className="p-1 text-xl text-white fas fa-cog"></i>
                        </div>
                    </SettingApp>
                </RoomNavbarContainer>
            )}
        </>
    );
}

export default RoomNavbar;
