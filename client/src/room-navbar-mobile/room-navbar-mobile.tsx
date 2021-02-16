function RoomNavbarMobile({ leaveMeeting, toggleMuteVideo, videoMuted, audioMuted, muteAudio }) {
    return (
        <div className="grid items-center grid-cols-4 gap-5">
            <div
                onClick={() => leaveMeeting()}
                className="flex items-center justify-center w-12 h-12 text-white bg-red-700 rounded-full cursor-pointer hover:bg-red-500"
            >
                <i className="fas fa-phone-slash"></i>
            </div>
            <div
                className="flex items-center justify-center h-10 text-white rounded-full cursor-pointer w-11 "
                style={{ backgroundColor: videoMuted ? '#fff' : '#22242f' }}
                onClick={() => toggleMuteVideo()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="text-white "
                    style={{ fill: videoMuted ? 'red' : '#fff', width: '50%', height: '50%' }}
                >
                    <path d="M13.5 8c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-8zm6 1.854v4.293l-2-1.408v-1.478l2-1.407zm2-3.854l-6 4.223v3.554l6 4.223v-12z" />
                </svg>
            </div>
            <div
                className="flex items-center justify-center h-10 text-white rounded-full cursor-pointer w-11"
                style={{ backgroundColor: audioMuted ? '#fff' : '#22242f' }}
                onClick={() => muteAudio()}
            >
                <svg
                    style={{ fill: audioMuted ? 'red' : '#fff', width: '50%', height: '50%' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2c1.103 0 2 .897 2 2v7c0 1.103-.897 2-2 2s-2-.897-2-2v-7c0-1.103.897-2 2-2zm0-2c-2.209 0-4 1.791-4 4v7c0 2.209 1.791 4 4 4s4-1.791 4-4v-7c0-2.209-1.791-4-4-4zm8 9v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z" />
                </svg>
            </div>
            <div
                className="flex items-center justify-center h-10 text-white rounded-full w-11"
                style={{ backgroundColor: '#22242f' }}
            >
                <svg
                    style={{ fill: '#fff', width: '50%', height: '50%' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                </svg>
            </div>
        </div>
    );
}

export default RoomNavbarMobile;
