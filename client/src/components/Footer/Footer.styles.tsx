import styled from 'styled-components';

export const FooterContaiener = styled.footer`
    background-color: #191b28;
    width: 100%;
    padding: 5rem;
    color: #fff;
    grid-gap: 40px;
    display: flex;
    flex-direction: column;
`;

export const FooterGrid = styled.div`
    display: grid;

    grid-template-columns: repeat(6, 1fr);
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        text-align: center;
        grid-gap: 40px;
    }
`;
