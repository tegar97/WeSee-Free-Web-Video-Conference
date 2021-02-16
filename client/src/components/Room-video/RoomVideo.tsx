// @ts-nocheck
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import ChatBar from '../chatbar/ChatBar';
import { socket } from '../constant/socket';
import RoomMenu from '../RoomMenu/RoomMenu';
import Users from '../users/UsersList';
import VideoGrid from '../videoGrid/videoGrid';
import { RoomVideoContainer } from './RoomVideo.styles';
const RoomVideo = ({
    userVideo,
    peers,
    stream,
    roomMenu,
    setRoomMenu,
    menuUser,
    setUserMenu,
    handleShareScreen,
    peersRef,
}) => {
    const { users, setUsers } = useAuth();
    useEffect(() => {
        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });
    }, []);

    console.log('users', users);
    console.log('peerss', peers);
    return (
        <RoomVideoContainer>
            {roomMenu ? (
                <RoomMenu setRoomMenu={setRoomMenu} icon="fa fa-times" title="Chat">
                    <ChatBar />
                </RoomMenu>
            ) : (
                ''
            )}
            {menuUser ? (
                <RoomMenu setRoomMenu={setUserMenu} icon="fa fa-times" title="Users">
                    {users.map((user) => (
                        <Users user={user} />
                    ))}
                </RoomMenu>
            ) : (
                ''
            )}

            <VideoGrid
                peersRef={peersRef}
                users={users}
                userVideo={userVideo}
                peers={peers}
                handleShareScreen={handleShareScreen}
            />
        </RoomVideoContainer>
    );
};

export default RoomVideo;
