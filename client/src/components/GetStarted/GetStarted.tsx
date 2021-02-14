import React from 'react';
import { Reveal, Tween } from 'react-gsap';
import { HeroButton } from '../Hero/Hero.styles';
import { FeatureText } from '../Section-Features/SectionFeatures.styles';
import { QuestionContainer } from './GetStarted.styles';

function GetStarted() {
    return (
        <QuestionContainer>
            <Reveal repeat>
                <Tween from={{ opacity: 0 }}>
                    <FeatureText>Get started with Wesee for free!</FeatureText>
                    <div className="text-center justify-items-center">
                        <HeroButton className="mt-5">Get Started</HeroButton>
                    </div>
                </Tween>
            </Reveal>
        </QuestionContainer>
    );
}

export default GetStarted;
