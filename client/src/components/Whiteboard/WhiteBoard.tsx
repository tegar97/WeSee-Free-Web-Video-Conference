// @ts-nocheck

import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import Modal from 'react-modal';
import { SettingNav } from './settings.styles';
import SettingSideBar from './sidebar/Setting-sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Prepare from '../../pages/preparePages/prepare';
import AudioSetting from '../Audio-setting/Audio-setting';
import { socket } from '../constant/socket';

const WhiteBoard = ({ children, RoomCode }) => {
    const [isOpen, setIsOpen] = useState(false);
    function Whiteboard() {
        window.open(`https://wesee-board.tegar.me/#${RoomCode}`);
        socket.emit(
            'sendMessage',
            `Hi I'm starting the whiteboard, let's join by opening the link : https://wesee-board.tegar.me/#${RoomCode}`,
            () => '',
        );
        socket.emit('isOpenWhiteboard', `https://wesee-board.tegar.me/#${RoomCode}`);
    }
    return (
        <>
            <button onClick={() => setIsOpen(true)}>{children}</button>

            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    overlay: { backgroundColor: 'rgba(25,27,40,.9)' },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '30%',
                        height: '40%',
                        backgroundColor: '#1c1f2e',
                        outline: 'none',
                        border: 'none',
                        padding: '1.5rem',
                    },
                }}
            >
                <div className="flex flex-col w-full h-full">
                    <div className="flex flex-row items-center justify-between w-full">
                        <span className="text-white">WhiteBoard</span>
                        <button className="text-xl text-white outline-none" onClick={() => setIsOpen(false)}>
                            x
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <div
                            onClick={Whiteboard}
                            className="flex flex-col w-1/2 p-1 text-center text-white cursor-pointer hover:bg-blue-500"
                        >
                            <i className="text-xl fas fa-chalkboard"></i>
                            <p className="mt-1 ">Start Whiteboard</p>
                        </div>
                        <span className="mt-3 text-sm text-white">
                            Participants in the room will automatically get a whiteboard link via message{' '}
                        </span>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default WhiteBoard;
