import React, { useState } from 'react';
import { useAudio } from '../../context/Audio';
import SettingApp from '../settings/settings';
import { RoomNavbarContainer, RoomNavbarItems } from './Room-navbar.styles';

function RoomNavbar({ stream, peers, handle, userVideo }: any) {
    const [videoMuted, setVideoMuted] = useState(false);
    const [isFullscreen, setIsFullScreen] = useState(false);
    const { audioMuted, setAudioMuted }: any = useAudio();

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

    // const leaveMeeting = () => {
    //     window.location.assign('http://localhost:3000/dasboard');

    //     // peers.current.destroy();
    //     // socket.emit('disconnect');
    //     // window.location.reload();
    // };

    function shareScreen() {
        // @ts-ignore

        navigator.mediaDevices.getDisplayMedia({ cursor: true }).then((screenStream) => {
            peers.current[0].peer.replaceTrack(stream.getVideoTracks()[0], screenStream.getVideoTracks()[0], stream);
            userVideo.current.srcObject = screenStream;
            screenStream.getTracks()[0].onended = () => {
                peers.current[0].peer.replaceTrack(
                    screenStream.getVideoTracks()[0],
                    stream.getVideoTracks()[0],
                    stream,
                );
                userVideo.current.srcObject = stream;
            };
        });
    }
    return (
        <RoomNavbarContainer>
            <div>
                <SettingApp stream={stream} peers={peers} userVideo={userVideo}>
                    <RoomNavbarItems>
                        <i data-tip="settings" className="p-1 text-xl text-white fas fa-cog"></i>
                    </RoomNavbarItems>
                </SettingApp>
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
                    >
                        Leave Meeting
                    </button>
                </div>
                <RoomNavbarItems onClick={handleFullScreen}>
                    {isFullscreen ? (
                        <i data-tip="Enter Full Screen" className="text-xl text-white fas fa-expand-arrows-alt"></i>
                    ) : (
                        <i data-tip="Exit Full Screen" className="text-xl text-white fas fa-compress-arrows-alt"></i>
                    )}
                </RoomNavbarItems>
                <RoomNavbarItems>
                    <i data-tip="Record confrences" className="text-xl text-white fas fa-record-vinyl"></i>
                </RoomNavbarItems>
            </div>
            <div className="flex flex-col items-center cursor-pointer" onClick={shareScreen}>
                <i className="text-xl text-white fas fa-desktop"></i>
                <p className="text-white text-md">Share Screen</p>
            </div>
        </RoomNavbarContainer>
    );
}

export default RoomNavbar;
