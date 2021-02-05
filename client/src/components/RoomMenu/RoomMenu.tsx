// @ts-nocheck

import Draggable from 'react-draggable';
import styled from 'styled-components';
import ResizePanel from 'react-resize-panel';

const RoomMenuContainer = styled.div`
    width: 30rem;
    height: 30rem;
    background-color: #1c1f2e;
    position: absolute;
    z-index: 100;
`;

const RoomMenuNavbar = styled.div`
    padding: 0.9rem 1.1rem;
    background-color: rgb(33, 36, 50, 0.75);
    color: #bababa;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;
const RoomMenu = ({ children, setRoomMenu }) => {
    return (
        <Draggable bounds="parent">
            <RoomMenuContainer>
                <RoomMenuNavbar>
                    <div>
                        <i class="far fa-comment-alt text-xl"></i>
                        <span className="ml-3 text-xl">Chat</span>
                    </div>
                    <button>
                        <i onClick={() => setRoomMenu(false)} class="fa fa-times text-2xl"></i>
                    </button>
                </RoomMenuNavbar>
                {children}
            </RoomMenuContainer>
        </Draggable>
    );
};

export default RoomMenu;
