//@ts-nocheck
import React from 'react';
import {
    FeatureText,
    FeatureContainer,
    FeatureItemContainer,
    FeatureItemText,
    FeatureItemTextMain,
    FeatureItemTextPrimary,
    FeatureItem,
    FeatureIcon,
    LineContainerVertical,
    LineContainerHorizontal,
    RoomPhoto,
    FeatureImage,
    MarginContainer,
} from '../Section-Features/SectionFeatures.styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { Reveal, Tween } from 'react-gsap';

function Feature() {
    return (
        <>
            <MarginContainer>
                <Reveal repeat>
                    <FeatureText>The latest Feature</FeatureText>
                </Reveal>
            </MarginContainer>

            <FeatureContainer style={{ width: '100%', height: ' 100%', maxHeight: '630px' }} id="feature">
                <FeatureItemContainer>
                    <FeatureItem>
                        <Tween from={{ opacity: 0.5 }} to={{ opacity: 1 }} duration={3}>
                            <FeatureIcon className=" fas fa-mouse" />
                        </Tween>

                        <Tween from={{ rotate: 180 }} to={{ rotate: 0 }} duration={2}>
                            <FeatureItemText>
                                <FeatureItemTextMain>One Click Go</FeatureItemTextMain>
                                <FeatureItemTextPrimary>Create a room with just one click</FeatureItemTextPrimary>
                            </FeatureItemText>
                        </Tween>
                        <Reveal repeat>
                            <div style={{ display: 'flex' }}>
                                <Tween from={{ width: 0 }} to={{ width: '8rem' }} duration={1}>
                                    <LineContainerHorizontal
                                        width="8rem"
                                        top="12px"
                                        right="-20px"
                                    ></LineContainerHorizontal>
                                </Tween>
                                <Tween
                                    from={{ height: 0, opacity: 0.8 }}
                                    to={{ height: '17rem', opacity: 1 }}
                                    duration={3}
                                >
                                    <LineContainerVertical
                                        rotate="-15deg"
                                        height="17rem"
                                        top="8px"
                                        right="-57px"
                                    ></LineContainerVertical>
                                </Tween>
                            </div>
                        </Reveal>
                    </FeatureItem>
                    <FeatureItem>
                        <Tween from={{ opacity: 0.5 }} to={{ opacity: 1 }} duration={3}>
                            <FeatureIcon className=" fas fa-cog" />
                        </Tween>
                        <Tween from={{ rotate: -180 }} to={{ rotate: 0 }} duration={2}>
                            <FeatureItemText>
                                <FeatureItemTextMain> Settings Your Device</FeatureItemTextMain>
                                <FeatureItemTextPrimary>
                                    adjust camera, audio or audio <br></br>test easily and quickly
                                </FeatureItemTextPrimary>
                            </FeatureItemText>
                        </Tween>
                        <div style={{ display: 'flex' }}>
                            <Reveal repeat>
                                <Tween from={{ width: 0 }} to={{ width: '7rem' }} duration={3}>
                                    <LineContainerHorizontal
                                        width="7rem"
                                        top="12px"
                                        right="-60px"
                                    ></LineContainerHorizontal>
                                </Tween>
                                <Tween from={{ height: 0 }} to={{ height: '10rem' }} duration={3}>
                                    <LineContainerVertical
                                        rotate="38deg"
                                        height="10rem"
                                        top="-130px"
                                        right="-110px"
                                    ></LineContainerVertical>
                                </Tween>
                            </Reveal>
                        </div>
                    </FeatureItem>
                </FeatureItemContainer>

                <FeatureImage>
                    <Tween from={{ width: 0 }} to={{ width: '100%' }} duration={3}>
                        <RoomPhoto
                            src="/ui.png"
                            alt="ui room"
                            style={{ filter: 'drop-shadow(0px 5px 20px #0E78F9)', justifySelf: 'center' }}
                        />
                    </Tween>
                </FeatureImage>
                <FeatureItemContainer>
                    <FeatureItem>
                        <FeatureIcon className="fas fa-comment-dots" />
                        <Tween from={{ rotate: 180 }} to={{ rotate: 0 }} duration={3}>
                            <FeatureItemText>
                                <FeatureItemTextMain>Live Chat Message</FeatureItemTextMain>
                                <FeatureItemTextPrimary>
                                    we ensure our clients can speak <br></br>via text comfortably and quickly{' '}
                                </FeatureItemTextPrimary>
                            </FeatureItemText>
                        </Tween>
                        <div style={{ display: 'flex' }}>
                            <Reveal repeat>
                                <Tween from={{ width: 0 }} to={{ width: '8rem' }} duration={3}>
                                    <LineContainerHorizontal
                                        width="8rem"
                                        top="13px"
                                        left="-65px"
                                    ></LineContainerHorizontal>
                                </Tween>
                                <Tween from={{ height: 0 }} to={{ height: '15rem' }} duration={3}>
                                    <LineContainerVertical
                                        rotate="15deg"
                                        height="15rem"
                                        top="10px"
                                        left="-100px"
                                    ></LineContainerVertical>
                                </Tween>
                            </Reveal>
                        </div>
                    </FeatureItem>

                    <FeatureItem>
                        <FeatureIcon className="fas fa-desktop" />
                        <Tween from={{ rotate: -180 }} to={{ rotate: '0' }} duration={3}>
                            <FeatureItemText>
                                <FeatureItemTextMain>Share Your Screen</FeatureItemTextMain>
                                <FeatureItemTextPrimary>Share your screen with one click </FeatureItemTextPrimary>
                            </FeatureItemText>
                        </Tween>
                        <div style={{ display: 'flex' }}>
                            <Reveal repeat>
                                <Tween from={{ width: 0 }} to={{ width: '10rem' }} duration={3}>
                                    <LineContainerHorizontal
                                        width="10rem"
                                        top="12px"
                                        left="-65px"
                                    ></LineContainerHorizontal>
                                </Tween>
                                <Tween from={{ height: 0 }} to={{ height: '13rem' }} duration={3}>
                                    <LineContainerVertical
                                        rotate="-20deg"
                                        height="13rem"
                                        top="-190px"
                                        left="-100px"
                                    ></LineContainerVertical>
                                </Tween>
                            </Reveal>
                        </div>
                    </FeatureItem>
                </FeatureItemContainer>
            </FeatureContainer>
        </>
    );
}

export default Feature;
