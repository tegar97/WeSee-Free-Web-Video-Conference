//@ts-nocheck
import React from 'react';
import {
    SectionFeatureContainer,
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
} from './SectionFeatures.styles';
import { useMediaQuery } from 'react-responsive';

function SectionFeatures() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <SectionFeatureContainer>
            <div style={{ marginTop: '40rem', color: '#fff' }}>
                <FeatureText>
                    The latest features <br />
                    And future features
                </FeatureText>
            </div>
            <FeatureContainer style={{ width: '100%', height: ' 100%', maxHeight: '630px' }}>
                <FeatureItemContainer>
                    <FeatureItem>
                        <FeatureIcon className=" fas fa-mouse" />
                        <FeatureItemText>
                            <FeatureItemTextMain>One Click Go</FeatureItemTextMain>
                            <FeatureItemTextPrimary>Create a room with just one click</FeatureItemTextPrimary>
                        </FeatureItemText>
                        <div style={{ display: 'flex' }}>
                            <LineContainerHorizontal width="8rem" top="12px" right="-20px"></LineContainerHorizontal>
                            <LineContainerVertical
                                rotate="-15deg"
                                height="17rem"
                                top="8px"
                                right="-57px"
                            ></LineContainerVertical>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <div>
                            <FeatureIcon className=" fas fa-cog" />
                        </div>
                        <FeatureItemText>
                            <FeatureItemTextMain> Settings Your Device</FeatureItemTextMain>
                            <FeatureItemTextPrimary>
                                adjust camera, audio or audio <br></br>test easily and quickly
                            </FeatureItemTextPrimary>
                        </FeatureItemText>
                        <div style={{ display: 'flex' }}>
                            <LineContainerHorizontal width="8rem" top="12px" right="-60px"></LineContainerHorizontal>
                            <LineContainerVertical
                                rotate="38deg"
                                height="10rem"
                                top="-130px"
                                right="-110px"
                            ></LineContainerVertical>
                        </div>
                    </FeatureItem>
                </FeatureItemContainer>

                <div className="">
                    <RoomPhoto
                        src="/ui.png"
                        alt="ui room"
                        style={{ filter: 'drop-shadow(0px 5px 20px #0E78F9)', justifySelf: 'center' }}
                    />
                </div>
                <FeatureItemContainer>
                    <FeatureItem>
                        <FeatureIcon className="fas fa-comment-dots" />
                        <FeatureItemText>
                            <FeatureItemTextMain>Live Chat Message</FeatureItemTextMain>
                            <FeatureItemTextPrimary>
                                we ensure our clients can speak <br></br>via text comfortably and quickly{' '}
                            </FeatureItemTextPrimary>
                        </FeatureItemText>
                        <div style={{ display: 'flex' }}>
                            <LineContainerHorizontal width="10rem" top="12px" left="-65px"></LineContainerHorizontal>
                            <LineContainerVertical
                                rotate="15deg"
                                height="15rem"
                                top="10px"
                                left="-100px"
                            ></LineContainerVertical>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon className="fas fa-desktop" />

                        <FeatureItemText>
                            <FeatureItemTextMain>Share Your Screen</FeatureItemTextMain>
                            <FeatureItemTextPrimary>Share your screen with one click </FeatureItemTextPrimary>
                        </FeatureItemText>
                        <div style={{ display: 'flex' }}>
                            <LineContainerHorizontal width="10rem" top="12px" left="-65px"></LineContainerHorizontal>
                            <LineContainerVertical
                                rotate="-20deg"
                                height="13rem"
                                top="-190px"
                                left="-100px"
                            ></LineContainerVertical>
                        </div>
                    </FeatureItem>
                </FeatureItemContainer>
            </FeatureContainer>
        </SectionFeatureContainer>
    );
}

export default SectionFeatures;
