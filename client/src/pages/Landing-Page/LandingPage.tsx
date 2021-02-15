// @ts-nocheck

import Hero from '../../components/Hero/Hero';
import SectionFeatures from '../../components/Section-Features/SectionFeatures';
import { ImageShowContainer, LandingPageContainer, SectionAboutService } from './LandingPage.styles';
import { useMediaQuery } from 'react-responsive';
import Question from '../../components/GetStarted/GetStarted';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/Footer';
import { Tween } from 'react-gsap';
import { TweenLite } from 'gsap';
import { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const LandingPage = ({ history }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    useEffect(() => {
        const ui = document.getElementById('ui');

        if (ui) {
            ui.onmouseover = function () {
                TweenLite.to(ui, 1, {
                    css: { filter: 'drop-shadow(0px 5px 90px #0E78F9)' },
                });
            };
        }
    }, []);
    return (
        <>
            <LandingPageContainer>
                <Navbar />

                <Hero history={history} />
                {!isTabletOrMobile && (
                    <div className="relative flex justify-center ">
                        <Tween
                            from={{ filter: 'drop-shadow(0px 5px 50px #fff)' }}
                            to={{ filter: 'drop-shadow(0px 5px 50px #0E78F9)' }}
                            duration={5}
                        >
                            <ImageShowContainer
                                className="absolute "
                                style={{
                                    marginTop: '-37rem',
                                    zIndex: 1002,
                                }}
                                id="ui"
                            >
                                <ScrollAnimation animateIn="fadeIn">
                                    <Tween
                                        from={{ x: '-300px', width: '50%' }}
                                        to={{ x: '0', width: '100%' }}
                                        duration={2}
                                    >
                                        <img src="/showoff2.png" alt="ui room" />
                                    </Tween>
                                </ScrollAnimation>
                            </ImageShowContainer>
                        </Tween>
                    </div>
                )}
                <SectionFeatures />

                <Question />
                <Footer />
            </LandingPageContainer>
        </>
    );
};

export default LandingPage;
