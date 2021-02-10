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
