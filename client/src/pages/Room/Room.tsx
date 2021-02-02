import React from 'react';
import RoomNavbar from '../../components/Room-navbar/Room-navbar';
import RoomVideo from '../../components/Room-video/RoomVideo';
import { RoomContainer, RoomChatAndUsers, RoomChatAndUsersItems, ItemExtends } from './Room.styles';

const Room: React.FC = () => {
    return (
        <RoomContainer>
            <RoomChatAndUsers>
                <RoomChatAndUsersItems>
                    <i className="text-2xl text-white fas fa-users"></i>
                    <ItemExtends>
                        <span style={{ fontSize: '.7rem' }}>10</span>
                    </ItemExtends>
                </RoomChatAndUsersItems>
                <RoomChatAndUsersItems style={{ borderLeft: '1px solid rgba(255,255,255,.2)' }}>
                    <i className="text-2xl text-white fas fa-comment-dots"></i>
                    <ItemExtends>
                        <span style={{ fontSize: '.7rem' }}>5</span>
                    </ItemExtends>
                </RoomChatAndUsersItems>
            </RoomChatAndUsers>
            <RoomVideo />
            <RoomNavbar />
        </RoomContainer>
    );
};

export default Room;
