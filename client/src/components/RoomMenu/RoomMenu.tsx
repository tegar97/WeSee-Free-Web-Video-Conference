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
    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        z-index: 10000;
    }
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
const RoomMenu = ({ children, setRoomMenu, icon, title }) => {
    return (
        <Draggable bounds="parent">
            <RoomMenuContainer>
                <RoomMenuNavbar>
                    <div>
                        <i class="far fa-comment-alt text-xl"></i>
                        <span className="ml-3 text-xl">{title}</span>
                    </div>
                    <button>
                        <i onClick={() => setRoomMenu(false)} className={`${icon} text-2xl`}></i>
                    </button>
                </RoomMenuNavbar>
                {children}
            </RoomMenuContainer>
        </Draggable>
    );
};

export default RoomMenu;
