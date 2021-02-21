//@ts-nocheck

import styled,{keyframes} from 'styled-components';

export const SectionFeatureContainer = styled.section`
    background-color: #000;
    
    width: 100%;
    clip-path: polygon(0 0, 100% 9%, 100% 100%, 0% 100%);
    height: 200rem;
    padding: 5rem 2rem;
    margin-top: -29rem;
    position: relative;
    
    
    @media only screen and (max-width: 768px) {
        clip-path: none;
        margin-top: -4rem;
        padding: 2rem 2rem;
        height: 160rem;

        clip-path: polygon(0 0, 100% 2%, 100% 100%, 0% 100%);


        

    }

`;

export const FeatureText = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    line-height: 67px;
    text-align: center;

    color: rgba(14, 120, 249, 0.96);

    text-shadow: 0px 10px 50px #0E78F9;
    transition: .5s all;
    cursor: pointer;
    &:hover{
        transform: skewY(2deg) skewX(10deg) scale(1);
        text-shadow: 0px 20px 50px #0E78F9;

    }
    @media only screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: 1.7;


    }
`

export const FeatureContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    text-align: center;
    margin-top: 10rem/* 160px */;
    width: 100% !important;
    height:  100% !important ; 
    max-height: 630px !important ;
    color: #fff;
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        margin-top: 0/* 160px */;

    }
    


`
export const FeatureScrollBar  = styled.div`
    direction: rtl;
    overflow:auto;
    height: 100%;
    width: 100%;
    text-align: left;
    
`

export const FeatureItemContainer = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FeatureItemText = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    @media only screen and (max-width: 768px) {
        text-align: center;
        margin-top: 1rem;


    }

`

export const FeatureItemTextMain = styled.p`
    font-size: 22px;
    font-style: normal;
    font-weight: bold;
    line-height: 27px;
    color: rgba(14, 120, 249, 0.96);
    text-shadow: 0px 4px 50px #0E78F9;
   
`

export const FeatureItemTextPrimary = styled.p`
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;

    color: #7D7D7D;
    margin-top: .5rem;
    transition : .8s all
`

export const FeatureItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition : 1s all;
    cursor: pointer;
    
    &:hover{
        transform: skewY(3deg) skewX(2deg) scale(1);

    }

    &:hover  i {
        color: #0E78F9;
        transform: scale(1.2)
    }
    &:hover p {
        color: #0E78F9;
    
    }

    @media only screen and (max-width: 768px) {
          margin-top: 2rem;
        flex-direction: column;
        padding: 1rem 0;

    }
`


export const FeatureIcon = styled.i`
    color: #fff;
    font-size: 3.5rem;
    filter: drop-shadow(0px 10px 50px #0E78F9);
    transition: 1s all;
    

`

const LineAnimation = keyframes`
    0%   {border: 2px solid #0E78F9;opacity: 20%}
  25%  {border: 2px solid #0E78F9;opacity: 40%}
  50%  {border: 2px solid #0E78F9;opacity: 60%}
  100% {border: 2px solid #0E78F9;opacity: 100%}
 
  @-webkit-keyframes LineAnimation {
    0%   {border: 2px solid #0E78F9}
  25%  {border: 2px solid #0E78F9}
  50%  {border: 2px solid #0E78F9}
  100% {border: 2px solid #0E78F9}
`;
export const LineContainer = styled.div`
    position: absolute;
    /* box-shadow: 5px 5px 10px #0E78F9; */
    animation: ${LineAnimation} 1.5s  ;




  

`

export const LineContainerVertical = styled.div`
    position: absolute;
    /* box-shadow: 5px 5px 10px #0E78F9; */
    animation: ${LineAnimation}  1.5s ;
    border-left: 2px solid #0E78F9;
    height: ${props => props.height};
    z-index: 100;
    right:   ${props => props.right}; ;
    top:  ${props => props.top};
    left:   ${props => props.left}; ;

   transform: rotate(${props => props.rotate});
   @media only screen and (max-width: 1200px) {
        display: none;

    }




  

`
export const LineContainerHorizontal = styled.div`
    position: absolute;
    /* box-shadow: 5px 5px 10px #0E78F9; */
    animation: ${LineAnimation}  2s ;
    width: ${props => props.width};;
    border: 1px solid #0E78F9;
    right:   ${props => props.right}; ;
    left:   ${props => props.left}; ;
    top:  ${props => props.top};
    @media only screen and (max-width: 1200px) {
        display: none;

    }




  

`
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
      filter: drop-shadow(0px 5px 40px #0E78F9)

    }
`;
export const RoomPhoto = styled.img`
    cursor: pointer;
    /* transition: 1s all !important;

    &:hover{
        filter: drop-shadow(0px 5px 140px #0E78F9) !important;

    } */
    
`

export const FeatureImage = styled.div`
    display: flex;
    align-self: center;
    @media only screen and (max-width: 768px) {
          grid-row: 1 / 2;
        margin-top: 4rem;
        width: 90%;
        justify-self: center;

    }
`

export const MarginContainer = styled.div`
    margin-top: 55rem;
    @media only screen and (max-width: 768px) {
        margin-top: 4rem;

    }
`


