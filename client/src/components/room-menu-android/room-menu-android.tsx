// @ts-nocheck

import { useState, useRef } from 'react';
import Modal from 'react-modal';
import { useMessage } from '../../context/chatMessage';
import { socket } from '../constant/socket';
import ScrollToBottom from 'react-scroll-to-bottom';

const RoomMenuMobile = ({ children, isDekstop }) => {
    const messageRef = useRef(null);
    const { messages }: any = useMessage();

    const [isOpen, setIsOpen] = useState(false);
    const sendMessage = (event) => {
        event.preventDefault();

        if (messageRef.current.value) {
            socket.emit('sendMessage', messageRef.current.value, () => (messageRef.current.value = ''));
        }
    };
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
                        top: '45%',
                        left: '50%',
                        right: 'auto',
                        bottom: '100%',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: isDekstop ? '40%' : '100%',
                        borderRadius: '10px',
                        height: isDekstop ? '80%' : '100%',
                        backgroundColor: isDekstop ? '#1c1f2e' : '#202125',
                        outline: 'none',
                        border: 'none',
                        padding: '0 0',
                    },
                }}
            >
                <div className="relative flex flex-col h-full">
                    <div
                        className="flex "
                        style={{ zIndex: 10021, backgroundColor: isDekstop ? '#1c1f2e' : '#202125' }}
                    >
                        <div className="flex flex-row items-center p-4 ">
                            <button className="outline-none" onClick={() => setIsOpen(false)}>
                                <svg
                                    style={{ fill: '#fff' }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                                </svg>
                            </button>

                            <span className="ml-5 text-xl text-white">Group Chat</span>
                        </div>
                    </div>
                    <div className="absolute flex flex-col w-full " style={{ height: '90%', bottom: '80px' }}>
                        <ScrollToBottom className="flex-auto h-full overflow-auto" style={{ height: '90%' }}>
                            <div className="p-6 text-center ">
                                <span className="text-center text-white" style={{ color: '#ababab' }}>
                                    This chat can only be read by people in this room and can only be seen while on a
                                    call{' '}
                                </span>
                            </div>
                            {messages.map((m, i) => (
                                <>
                                    {m.user === 'system' ? (
                                        ''
                                    ) : (
                                        <div className="flex flex-row w-full p-6">
                                            <div className="flex items-center">
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-center text-white uppercase rounded-full"
                                                    style={{
                                                        backgroundColor: '#0e78f9',
                                                        width: '40px',
                                                        height: '40px',
                                                    }}
                                                >
                                                    {m.user.substring(0, 1)}
                                                </div>
                                                <div className="flex flex-col ml-3 ">
                                                    <span
                                                        className="mb-1 text-xs capitalize"
                                                        style={{ color: 'rgba(255,255,255,.5)' }}
                                                    >
                                                        {m.user}
                                                    </span>
                                                    <span
                                                        className="text-sm text-white "
                                                        style={{
                                                            wordWrap: 'break-word',
                                                            overflow: 'hidden',
                                                        }}
                                                    >
                                                        {m.text}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ))}
                        </ScrollToBottom>
                    </div>
                    <div className="absolute bottom-0 w-full ">
                        <div className="relative w-full" style={{ padding: '1rem 1rem' }}>
                            <textarea
                                className="w-full outline-none rounded-2xl"
                                placeholder="Send Message"
                                style={{
                                    padding: '.6rem 1.4rem',
                                    color: '#fff',
                                    backgroundColor: isDekstop ? 'rgb(33, 36, 50, 0.75)' : '#3c4042',
                                }}
                                rows={1}
                                ref={messageRef}
                            ></textarea>

                            <div className="absolute right-8 top-7">
                                <button onClick={(e) => sendMessage(e)}>
                                    <svg
                                        style={{ fill: '#fff' }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default RoomMenuMobile;
