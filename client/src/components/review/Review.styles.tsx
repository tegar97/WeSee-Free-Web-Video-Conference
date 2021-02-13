import styled from 'styled-components';

export const ReviewContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    color: #fff;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ReviewText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 3rem;
    justify-content: center;
`;

export const ReviewLogoContainer = styled.div`
    width: 40%;
    @media only screen and (max-width: 768px) {
        align-self: center;
    }
`;
export const ReviewLogo = styled.img`
    max-width: 100%;
`;
