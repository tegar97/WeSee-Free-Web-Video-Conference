// @ts-nocheck

import Draggable from 'react-draggable';
import ChatBar from '../chatbar/ChatBar';
import RoomMenu from '../RoomMenu/RoomMenu';
import VideoGrid from '../videoGrid/videoGrid';
import { RoomVideoContainer } from './RoomVideo.styles';
const RoomVideo = ({ userVideo, peers, stream, chatBar }) => {
    return (
        <RoomVideoContainer style={{ width: chatBar ? '70%' : '100%' }}>
            <RoomMenu>
                <p className="handle">te</p>
            </RoomMenu>
            <VideoGrid userVideo={userVideo} peers={peers} chatBar={chatBar} />
        </RoomVideoContainer>
    );
};

export default RoomVideo;
