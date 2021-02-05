// @ts-nocheck

import Draggable from 'react-draggable';
import ChatBar from '../chatbar/ChatBar';
import RoomMenu from '../RoomMenu/RoomMenu';
import VideoGrid from '../videoGrid/videoGrid';
import { RoomVideoContainer } from './RoomVideo.styles';
const RoomVideo = ({ userVideo, peers, stream, roomMenu, setRoomMenu }) => {
    return (
        <RoomVideoContainer>
            {roomMenu ? (
                <RoomMenu setRoomMenu={setRoomMenu}>
                    <ChatBar />
                </RoomMenu>
            ) : (
                ''
            )}
            <VideoGrid userVideo={userVideo} peers={peers} />
        </RoomVideoContainer>
    );
};

export default RoomVideo;
