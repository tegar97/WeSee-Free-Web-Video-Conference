import React from 'react';
import { RoomVideoContainer, RoomVideoGrid } from './RoomVideo.styles';
const RoomVideo: React.FC = () => {
    return (
        <RoomVideoContainer>
            <RoomVideoGrid>
                <div style={{ gridColumn: '1/5' }}>
                    <video width="320" height="240" controls playsInline>
                        <source src="/videoCall1.mp4" type="video/mp4" />
                    </video>
                </div>
                <p>item 1</p>
                <p>item 1</p>
                <p>item 1</p>
                <p>item 1</p>
            </RoomVideoGrid>
        </RoomVideoContainer>
    );
};

export default RoomVideo;
