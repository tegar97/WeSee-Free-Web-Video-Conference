import styled from 'styled-components';

export const SectionFeatureContainer = styled.section`
    background-color: #000;
    
    width: 100%;
    clip-path: polygon(0 0, 100% 14%, 100% 100%, 0 82%);
    height: 140rem;
    padding: 5rem 2rem;
    margin-top: -20rem;
    position: relative

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
`

export const FeatureContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    text-align: center;
    margin-top: 10rem/* 160px */;
    width: '100%' !important;
    height: ' 100%' !important ; 
    max-height: '630px' !important ;
    color: #fff;

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
    

`

export const FeatureItemTextMain = styled.p`
    font-size: 2rem;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    color: rgba(14, 120, 249, 0.96);
    text-shadow: 0px 4px 50px #0E78F9
`

export const FeatureItemTextPrimary = styled.p`
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;

    color: #7D7D7D;
    margin-top: .5rem;
`

export const FeatureItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FeatureIcon = styled.i`
    color: #fff;
    font-size: 3.5rem;
    filter: drop-shadow(0px 10px 50px #0E78F9);

`