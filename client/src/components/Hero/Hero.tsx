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
import { useAuth } from '../../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase';
import ScrollAnimation from 'react-animate-on-scroll';

function Hero({ history }) {
    const [RoomCode, setRoomCode] = useState('');
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' });
    const { currentUser }: any = useAuth();

    const db = firebase.firestore();

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const joinRoom = async () => {
        const usersCollection = db.collection('room');
        usersCollection
            .where('code', '==', RoomCode)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    history.push(`/room/${doc.data().roomId}`);
                });
            })
            .catch(function (error) {
                console.log('Error getting documents: ', error);
            });
    };
    const createRoom = async () => {
        const roomId = uuidv4(5);
        if (currentUser) {
            await db
                .collection('room')
                .add({ roomId: roomId, code: makeid(5), users: [currentUser.displayName] })
                .then(() => history.push(`/room/${roomId}`));
        } else {
            history.push('/signin');
        }
    };

    return (
        <div>
            <HeroContainer id="about">
                <HeroHeader>
                    {isTabletOrMobile ? (
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
                            <HeroHeaderMainText>STAY CONNECTED TO EVERYONE</HeroHeaderMainText>
                        </Tween>
                    ) : (
                        <Reveal>
                            <Tween from={{ x: '200px' }} stagger={0.3} ease="elastic.out(0.1, 0.1)">
                                <SplitWords wrapper={<HeroHeaderMainText style={{ display: 'inline-block' }} />}>
                                    STAY CONNECTED TO EVERYONE
                                </SplitWords>
                            </Tween>
                        </Reveal>
                    )}

                    <Tween from={{ x: '-100px' }} to={{ x: '0' }} duration={2}>
                        <HeroHeaderPrimaryText>
                            Wesee is is a video call service that ensures everyone can be connected with just one click
                        </HeroHeaderPrimaryText>
                    </Tween>
                    {}
                    <Tween from={{ x: '-200px' }} to={{ x: '0' }} duration={2}>
                        <div className="flex mt-5">
                            <HeroButton onClick={() => createRoom()}>Create Room</HeroButton>
                            <div className="relative flex items-center ">
                                <RoomCodeInput
                                    value={RoomCode}
                                    onChange={(e) => setRoomCode(e.target.value)}
                                    className="ml-5"
                                    placeholder="Enter Room Code"
                                />
                                <KeyboardInput className="fas fa-keyboard "></KeyboardInput>

                                {RoomCode.length > 3 ? (
                                    <p
                                        className="cursor-pointer hover:translate-y-1"
                                        onClick={() => joinRoom()}
                                        style={{ color: '#0e78f9', marginLeft: '1rem' }}
                                    >
                                        Join Now
                                    </p>
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
                    <ScrollAnimation animateIn="fadeIn">
                        <HeroImageContainer>
                            <img src="/Hero.png" alt="Hero Image 2" style={{ width: '100%', height: '900px' }} />
                        </HeroImageContainer>
                    </ScrollAnimation>
                )}
            </HeroContainer>
        </div>
    );
}

export default Hero;
