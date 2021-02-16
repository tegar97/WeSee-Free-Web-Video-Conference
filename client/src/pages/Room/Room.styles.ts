import styled from 'styled-components'


export const RoomContainer = styled.div`
    background-color  : #191B28;
    display: flex;
    height: 100vh;
    
    width: 100%;    


`

export const RoomChatAndUsers = styled.div`
  
    position: absolute;
    z-index: 124;
    display: flex;
  
    right: 0;
    background-color: #1C1F2E; 

`

export const RoomChatAndUsersItems = styled.div`
    width: 4rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.25);
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.25);
    cursor: pointer;

`

export const ItemExtends = styled.div`
    position: absolute;

    top: .6rem;
    right: .6rem;
    background-color: #0E78F9;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    width: 1.5rem;
    height: 1rem;
    cursor: pointer;

`