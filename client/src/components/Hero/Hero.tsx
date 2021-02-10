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

function Hero() {
    const [RoomCode, setRoomCode] = useState('');
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div>
            <HeroContainer>
                <HeroHeader>
                    <HeroHeaderMainText>STAY CONNECTED TO EVERYONE</HeroHeaderMainText>
                    <HeroHeaderPrimaryText>
                        Wesee is is a video call service that ensures everyone can be connected with just one click
                    </HeroHeaderPrimaryText>
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
                </HeroHeader>
                <HeroImageContainer>
                    {isTabletOrMobile ? (
                        <img src="/hero2.png" alt="Hero Image" style={{ width: '100%', height: '350px' }} />
                    ) : (
                        <img src="/hero.png" alt="Hero Image" style={{ width: '100%', height: '900px' }} />
                    )}
                </HeroImageContainer>
            </HeroContainer>
        </div>
    );
}

export default Hero;
