import styled from 'styled-components';

export const RoomVideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: none;
`;
export const RoomVideoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);

    grid-gap: 10px;
`;

export const Video = styled.video`
    object-fit: cover;
    object-position: center;

    width: 100%;
    height: auto;
`;
export const VideoChild = styled.video`
    object-fit: cover;
    object-position: center;

    width: 100%;
    height: 150px;
`;
