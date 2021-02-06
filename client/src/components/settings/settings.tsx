// @ts-nocheck

import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import Modal from 'react-modal';
import { SettingNav } from './settings.styles';
import SettingSideBar from './sidebar/Setting-sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Prepare from '../../pages/preparePages/prepare';
import AudioSetting from '../Audio-setting/Audio-setting';

const SettingApp = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {}, []);
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
                        width: '50%',
                        height: '65%',
                        backgroundColor: '#1c1f2e',
                        outline: 'none',
                        border: 'none',
                        padding: '.2rem 0',
                    },
                }}
            >
                <div style={{ height: '100%' }}>
                    <SettingNav>
                        <div>
                            <i className="text-xl fas fa-cog"></i>
                            <span className="ml-3 text-xl">Settings</span>
                        </div>
                        <button>
                            <i onClick={() => setIsOpen(false)} className="text-2xl fa fa-times"></i>
                        </button>
                    </SettingNav>
                    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
                        <SettingSideBar />
                        <div style={{ width: '100%' }}>
                            <AudioSetting />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default SettingApp;
