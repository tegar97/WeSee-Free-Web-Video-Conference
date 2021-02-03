import React, { useContext, useState } from 'react';
const AudioContext = React.createContext<null>(null);

export function useAudio() {
    return useContext(AudioContext);
}

export function AudioProvider({ children }) {
    const [audioMuted, setAudioMuted] = useState(false);

    const value: any = {
        setAudioMuted,
        audioMuted,
    };

    return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}
