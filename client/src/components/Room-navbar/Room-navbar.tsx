import React, { useState } from 'react';
import { RoomNavbarContainer, RoomNavbarItems } from './Room-navbar.styles';

function RoomNavbar({ stream }) {
    const [videoMuted, setVideoMuted] = useState(false);

    function toggleMuteVideo() {
        if (stream) {
            setVideoMuted(!videoMuted);
            stream.getVideoTracks()[0].enabled = videoMuted;
        }
    }
    return (
        <RoomNavbarContainer>
            <div>
                <RoomNavbarItems>
                    <i data-tip="settings" className="p-1 text-xl text-white fas fa-cog"></i>
                </RoomNavbarItems>
            </div>
            <div className="grid grid-cols-6 gap-10">
                <RoomNavbarItems>
                    <i data-tip="Turn off mic" className="text-xl text-white fas fa-microphone"></i>
                </RoomNavbarItems>
                <RoomNavbarItems onClick={toggleMuteVideo}>
                    <i data-tip="Turn off camera" className="text-xl text-white fas fa-video"></i>
                </RoomNavbarItems>
                <div className="flex items-center" style={{ gridColumn: '3/5', width: '100%' }}>
                    <button
                        style={{ borderRadius: '5px' }}
                        className="px-2 py-3 font-bold text-white transition duration-300 ease-in-out bg-red-600 w-100 hover:bg-red-500 "
                    >
                        Leave Meeting
                    </button>
                </div>
                <RoomNavbarItems>
                    <i data-tip="Full Screen" className="text-xl text-white fas fa-expand-arrows-alt"></i>
                </RoomNavbarItems>
                <RoomNavbarItems>
                    <i data-tip="Record confrences" className="text-xl text-white fas fa-record-vinyl"></i>
                </RoomNavbarItems>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <i className="text-xl text-white fas fa-desktop"></i>
                <p className="text-white text-md">Share Screen</p>
            </div>
        </RoomNavbarContainer>
    );
}

export default RoomNavbar;
