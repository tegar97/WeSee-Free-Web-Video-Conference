import React from 'react';
import RoomVideo from '../../components/Room-video/RoomVideo';
import { RoomContainer, RoomChatAndUsers, RoomChatAndUsersItems, ItemExtends } from './Room.styles';

const Room: React.FC = () => {
    return (
        <RoomContainer>
            <RoomChatAndUsers>
                <RoomChatAndUsersItems>
                    <i className="fas fa-users text-white text-2xl"></i>
                    <ItemExtends>
                        <span style={{ fontSize: '.7rem' }}>10</span>
                    </ItemExtends>
                </RoomChatAndUsersItems>
                <RoomChatAndUsersItems style={{ borderLeft: '1px solid rgba(255,255,255,.2)' }}>
                    <i className="fas fa-comment-dots text-white text-2xl"></i>
                    <ItemExtends>
                        <span style={{ fontSize: '.7rem' }}>5</span>
                    </ItemExtends>
                </RoomChatAndUsersItems>
            </RoomChatAndUsers>
            <RoomVideo />
        </RoomContainer>
    );
};

export default Room;
