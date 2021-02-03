import styled from 'styled-components'

export const RoomNavbarContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    padding: 1rem 8rem;
    background-color: #1C1F2E;
    z-index: 1000;


`

export const RoomNavbarItems = styled.div`
    display: flex;
    justify-content: center;
    align-items : center;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255,255,255,.1);
    transition: all .5s;
    cursor: pointer;
    &:hover{
        border: none;

        box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.25);
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.25);
    }


`