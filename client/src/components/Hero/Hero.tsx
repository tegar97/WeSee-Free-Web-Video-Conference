import React, { useState } from 'react';
import {
    HeroContainer,
    HeroHeader,
    HeroHeaderMainText,
    HeroHeaderPrimaryText,
    HeroButton,
    HeroImageContainer,
    RoomCodeInput,
    KeyboardInput,
} from './Hero.styles';
import { useMediaQuery } from 'react-responsive';
import { Reveal, SplitWords, Tween } from 'react-gsap';

function Hero() {
    const [RoomCode, setRoomCode] = useState('');
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div>
            <HeroContainer id="about">
                <HeroHeader>
                    <Reveal>
                        <Tween from={{ x: '200px' }} stagger={0.3} ease="elastic.out(0.1, 0.1)">
                            <SplitWords wrapper={<HeroHeaderMainText style={{ display: 'inline-block' }} />}>
                                STAY CONNECTED TO EVERYONE
                            </SplitWords>
                        </Tween>
                    </Reveal>

                    <Tween from={{ x: '-100px' }} to={{ x: '0' }} duration={2}>
                        <HeroHeaderPrimaryText>
                            Wesee is is a video call service that ensures everyone can be connected with just one click
                        </HeroHeaderPrimaryText>
                    </Tween>
                    {}
                    <Tween from={{ x: '-200px' }} to={{ x: '0' }} duration={2}>
                        <div className="flex mt-5">
                            <HeroButton>Create Room</HeroButton>
                            <div className="relative flex items-center ">
                                <RoomCodeInput
                                    value={RoomCode}
                                    onChange={(e) => setRoomCode(e.target.value)}
                                    className="ml-5"
                                    placeholder="Enter Room Code"
                                />
                                <KeyboardInput className="fas fa-keyboard "></KeyboardInput>

                                {RoomCode.length > 3 ? (
                                    <p style={{ color: '#0e78f9', marginLeft: '1rem' }}>Join Now</p>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </Tween>
                </HeroHeader>
                {isTabletOrMobile ? (
                    <Tween from={{ x: '-200px' }} to={{ x: '0' }} duration={2}>
                        <HeroImageContainer>
                            <img src="/hero2.png" alt="Hero Image" style={{ width: '100%', height: '350px' }} />
                        </HeroImageContainer>
                    </Tween>
                ) : (
                    <HeroImageContainer>
                        <Reveal repeat>
                            <Tween from={{ opacity: 0 }}>
                                <img src="/hero.png" alt="Hero Image" style={{ width: '100%', height: '900px' }} />
                            </Tween>
                        </Reveal>
                    </HeroImageContainer>
                )}
            </HeroContainer>
        </div>
    );
}

export default Hero;
