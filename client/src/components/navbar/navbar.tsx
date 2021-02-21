import React, { useEffect, useState } from 'react';
import { HeroButton } from '../Hero/Hero.styles';
import {
    NavbarContainer,
    NavbarListContainer,
    NavbarList,
    HamburgerMenu,
    SidePanel,
    CloseBtn,
    UserName,
} from './Navbar.styles';
import { Link } from 'react-scroll';
import { Link as Href } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
    const [active, seteActive] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [NavMobileActive, setNavMobileActive] = useState(false);
    const { currentUser, logout }: any = useAuth();
    console.log(NavMobileActive);
    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    }, []);
    const changeBackground = () => {
        if (window.scrollY > 80) {
            seteActive(true);
        } else {
            seteActive(false);
        }
    };
    return (
        <NavbarContainer style={{ backgroundColor: active ? '#151c2a' : '' }}>
            <img src="/WeSee.png" alt="logo" />

            {!isTabletOrMobile ? (
                <NavbarListContainer className={`${active ? ' text-white' : ''}`} style={{ transition: '.5s all' }}>
                    <NavbarList>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                            About
                        </Link>
                    </NavbarList>
                    <NavbarList>
                        <Link activeClass="active" to="feature" spy={true} smooth={true} offset={-70} duration={500}>
                            Feature
                        </Link>
                    </NavbarList>
                    <NavbarList>
                        <Link activeClass="active" to="review" spy={true} smooth={true} offset={-70} duration={500}>
                            Review
                        </Link>
                    </NavbarList>
                    <div
                        className="flex items-center"
                        style={{
                            justifyContent: active ? 'flex-end' : '',
                            transition: '.8s all',
                            width: '100%',
                        }}
                    >
                        {currentUser ? (
                            <div className="relative flex items-center">
                                <NavbarList onClick={() => logout()}>Logout</NavbarList>
                                <UserName>{currentUser.displayName} </UserName>
                            </div>
                        ) : (
                            <>
                                <Href to="/signin">
                                    <NavbarList>Login</NavbarList>
                                </Href>
                                <NavbarList>
                                    <HeroButton style={{ width: '95px', height: '42px' }}>SignUp</HeroButton>
                                </NavbarList>
                            </>
                        )}
                    </div>
                </NavbarListContainer>
            ) : (
                <HamburgerMenu onClick={() => setNavMobileActive(!NavMobileActive)}>
                    <span></span>
                </HamburgerMenu>
            )}
            {NavMobileActive ? (
                <SidePanel>
                    <CloseBtn href="javascript:void(0)" className="closebtn" onClick={() => setNavMobileActive(false)}>
                        &times;
                    </CloseBtn>
                    <span className="cursor-pointer">
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                            About
                        </Link>
                    </span>
                    <span className="cursor-pointer">
                        <Link activeClass="active" to="feature" spy={true} smooth={true} offset={-70} duration={500}>
                            Feature
                        </Link>
                    </span>
                    <span className="cursor-pointer">
                        <Link activeClass="active" to="review" spy={true} smooth={true} offset={-70} duration={500}>
                            Review
                        </Link>
                    </span>
                    {currentUser ? (
                        <>
                            <a onClick={() => logout()}>Logout</a>
                            <UserName>{currentUser.displayName} </UserName>
                        </>
                    ) : (
                        <>
                            <span>
                                <Href to="/signin">Signin</Href>
                            </span>
                            <span>
                                <Href to="/signin">SignUp</Href>
                            </span>
                        </>
                    )}
                </SidePanel>
            ) : (
                ''
            )}
        </NavbarContainer>
    );
}

export default Navbar;
