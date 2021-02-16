import styled from 'styled-components';

export const ChatBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const ChatInput = styled.input`
    padding: 1rem;
    border-radius: 5px;
    color: #b4b4b4;
    width: 100%;
    background-color: rgb(33, 36, 50, 0.75);

    &:focus {
        outline: none;
    }
`;

export const ChatMessage = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    &:-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #b4b4b4;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #b4b4b4;
    }
`;
