import styled from 'styled-components';

export const PartnerSection = styled.section`
    margin-top: 16rem;

    @media only screen and (max-width: 768px) {
        margin-top: 30rem;
    }
`;
export const LogoArea = styled.div`
    width: 70%;
    text-align: center;
    margin: 8rem auto;
`;

export const LogoContainer = styled.div`
    width: 100%;
    background-color: #1e1e1e;
    border: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1rem;
    /* box-shadow: 0px 10px 50px 0px #0e78f9; */
    outline: none;
    transition: 0.8s all;
    &:hover {
        -moz-transform: scale(0.8) skew(-13deg, 0deg);
        -webkit-transform: scale(0.8) skew(-13deg, 0deg);
        -o-transform: scale(0.8) skew(-13deg, 0deg);
        -ms-transform: scale(0.8) skew(-13deg, 0deg);
        transform: scale(0.8) skew(-13deg, 0deg);
        box-shadow: 0px 10px 50px 0px #0e78f9;
    }
`;

export const LogoImage = styled.img`
    width: 100%;
    height: 100%;

    /* box-shadow: 0px 0px 50px 0px #0e78f9; */

    /* box-shadow: 0px 4px 50px 1px #0e78f9;
    background: transparent; ; */
`;
