import React, { useContext, useState } from 'react';
const MessageContext = React.createContext<null>(null);

export function useMessage() {
    return useContext(MessageContext);
}

export function MessageProvider({ children }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const value: any = {
        message,
        messages,
        setMessage,
        setMessages,
    };

    return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
}
