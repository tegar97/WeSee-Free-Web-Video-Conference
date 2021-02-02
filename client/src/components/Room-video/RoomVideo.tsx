import VideoGrid from '../videoGrid/videoGrid';
import { RoomVideoContainer } from './RoomVideo.styles';
const RoomVideo = ({ userVideo, peers }) => {
    return (
        <RoomVideoContainer>
            <VideoGrid userVideo={userVideo} peers={peers} />
        </RoomVideoContainer>
    );
};

export default RoomVideo;
