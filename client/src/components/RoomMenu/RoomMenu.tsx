// @ts-nocheck

import Draggable from 'react-draggable';
import styled from 'styled-components';

const RoomMenuContainer = styled.div`
    width: 15rem;
    height: 15rem;
    background-color: #1c1f2e;
    position: absolute;
    z-index: 100;
`;
const RoomMenu = ({ children }) => {
    return (
        <Draggable>
            <RoomMenuContainer>{children}</RoomMenuContainer>
        </Draggable>
    );
};

export default RoomMenu;
