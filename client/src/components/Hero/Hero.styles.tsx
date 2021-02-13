import styled from 'styled-components';

export const HeroHeader = styled.div`
    padding: 3rem;
    margin-top: 5rem;
`;

export const HeroHeaderMainText = styled.h1`
    color: #0e78f9;
    font-weight: 800;
    font-size: 2.5rem;
`;

export const HeroHeaderPrimaryText = styled.p`
    font-size: 1.45rem;
    color: #9ea6b8;
    word-wrap: break-word;
    line-height: 1.8;
    opacity: 60%;
`;

export const HeroButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    width: 8rem;
    height: 50px;
    background-color: #0e78f9;
    color: #fff;
`;

export const HeroImageContainer = styled.div`
    width: 100%;
    padding: 0;

    @media only screen and (max-width: 1224px) {
    }
`;

export const RoomCodeInput = styled.input`
    background-color: transparent;
    border: 0.5px solid rgba(14, 120, 249, 0.3);
    padding: 0.1rem 0 0 2.3rem;
    height: 50px;
    width: 245px;
    outline: none;
    transition: 0.5s all;
    &:focus {
        border: 1px solid rgba(14, 120, 249, 1);
    }
    @media only screen and (max-width: 768px) {
        width: 200px;
    }
`;

export const KeyboardInput = styled.i`
    position: absolute;
    color: #0e78f9;
    left: 30px;
`;

export const HeroContainer = styled.section`
    height: 80rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    background-color: #191b28;
    color: #fff;
    @media only screen and (max-width: 1224px) {
        display: flex;
        flex-direction: column;

        height: 60rem;
    }
`;
