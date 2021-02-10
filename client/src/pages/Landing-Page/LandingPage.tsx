// @ts-nocheck

import Hero from '../../components/Hero/Hero';
import SectionFeatures from '../../components/Section-Features/SectionFeatures';
import { ImageShowContainer, LandingPageContainer } from './LandingPage.styles';

const LandingPage = () => {
    return (
        <LandingPageContainer>
            <Hero />
            <div className="relative flex justify-center ">
                <ImageShowContainer
                    className="absolute "
                    style={{ marginTop: '-30rem', zIndex: 1002, filter: 'drop-shadow(0px 5px 50px #0E78F9)' }}
                >
                    <img src="/showoff2.png" alt="ui room" />
                </ImageShowContainer>
            </div>
            <SectionFeatures />
        </LandingPageContainer>
    );
};

export default LandingPage;
