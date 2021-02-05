import { ChatBoxContainer, MessageText } from './chat-box.styles';

function ChatBox({ message }) {
    return (
        <ChatBoxContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className="text-md" style={{ color: '#BABABA' }}>
                    {message.user}
                </p>
            </div>

            <div
                className="mt-2"
                style={{
                    maxWidth: '100%',
                    display: 'inline-block',
                    width: 'auto',
                    backgroundColor: '#232634',
                    padding: '.8rem .5rem',
                    color: '#E8E8E8',
                    borderRadius: '10px',
                }}
            >
                <MessageText style={{ width: '100%' }}>{message.text}</MessageText>
            </div>
        </ChatBoxContainer>
    );
}

export default ChatBox;
