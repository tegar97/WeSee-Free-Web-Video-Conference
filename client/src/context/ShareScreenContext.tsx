import React, { useContext, useState, useRef } from 'react';
import { socket } from '../components/constant/socket';
const ShareScreenContext = React.createContext<null>(null);

export function useShareScreen() {
    return useContext(ShareScreenContext);
}

export function ShareScreenProvider({ children }) {
    const [isShareScreen, setIsShareScreen] = useState(false);
    const videoShareScreenRef = useRef();

    React.useEffect(() => {
        socket.on('isShareScreenActive', (isShareScreenActive) => {
            setIsShareScreen(isShareScreenActive);
        });
    }, []);

    const value: any = {
        isShareScreen,
        setIsShareScreen,
        videoShareScreenRef,
    };

    return <ShareScreenContext.Provider value={value}>{children}</ShareScreenContext.Provider>;
}
