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
} from './SectionFeatures.styles';
function SectionFeatures() {
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
                    </FeatureItem>
                </FeatureItemContainer>
                <div className="flex items-center">
                    {' '}
                    <img
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
                                we ensure our clients can speak via text comfortably and quickly{' '}
                            </FeatureItemTextPrimary>
                        </FeatureItemText>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon className="fas fa-desktop" />

                        <FeatureItemText>
                            <FeatureItemTextMain>Share Your Screen</FeatureItemTextMain>
                            <FeatureItemTextPrimary>Share your screen with one click </FeatureItemTextPrimary>
                        </FeatureItemText>
                    </FeatureItem>
                </FeatureItemContainer>
            </FeatureContainer>
        </SectionFeatureContainer>
    );
}

export default SectionFeatures;
