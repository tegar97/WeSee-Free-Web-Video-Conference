import styled, { keyframes } from 'styled-components';

export const LandingPageContainer = styled.div`
    font-family: 'Inter', sans-serif;
`;
const bounce = keyframes`
    from {
      transform: translateY(0px);
      
    }
    to {
      transform: translateY(-8px);
      filter: drop-shadow(0px 5px 40px #0E78F9)
    }
  }
  @-webkit-keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-15px);
    }
`;

export const ImageShowContainer = styled.div`
    margin-top: '-30rem';
    z-index: 1002;
    filter: 'drop-shadow(0px 5px 50px #0E78F9)';
    position: absolute;
    animation: ${bounce} 1.5s infinite alternate;
`;

export const SectionAboutService = styled.section`
    background-color: #000;

    width: 100%;
    clip-path: polygon(0 0, 100% 14%, 100% 100%, 0 82%);
    height: 140rem;
    padding: 5rem 2rem;
    margin-top: -20rem;
`;
