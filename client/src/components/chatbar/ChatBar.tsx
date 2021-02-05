import React, { useRef } from 'react';
import { useMessage } from '../../context/chatMessage';
import ChatBox from '../chat-box/chat-box';
import { socket } from '../constant/socket';
import { ChatBarContainer, ChatInput, ChatMessage } from './ChatBar.styles';
import './scroll.scss';
const ChatBar = () => {
    const messageRef = useRef(null);
    const { messages }: any = useMessage();
    console.log('asdsad', messages);
    const sendMessage = (event) => {
        event.preventDefault();

        if (messageRef.current.value) {
            socket.emit('sendMessage', messageRef.current.value, () => (messageRef.current.value = ''));
        }
    };

    return (
        <ChatBarContainer>
            <div style={{ display: 'flex', height: '100%' }}>
                <ChatMessage>
                    {messages.map((message, i) => (
                        <ChatBox message={message} key={i} />
                    ))}
                </ChatMessage>
                <form style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                    <ChatInput ref={messageRef} placeholder="Type your message" />
                    <button
                        onClick={(e) => sendMessage(e)}
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            height: '100%',
                            backgroundColor: '#0E78F9',
                            padding: '1rem',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            outline: 'none',
                        }}
                    >
                        <i className="text-white text-md fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </ChatBarContainer>
    );
};

export default ChatBar;
