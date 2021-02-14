import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    position: fixed;
    position: -webkit-sticky; /* Safari */

    height: 80px;
    padding: 1.5rem 3rem;
    display: flex;
    align-items: center;
    z-index: 100241224;
    top: 0;
    color: #fff;
    transition: 0.5s all;

    @media only screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const NavbarListContainer = styled.ul`
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
`;

export const NavbarList = styled.li`
    display: flex;
    list-style: none;
    margin-left: 1rem;
    cursor: pointer;
    transition: 1s all;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const HamburgerMenu = styled.label`
    display: flex;
    align-items: center;
    position: relative;

    width: 26px;
    height: 26px;

    cursor: pointer;
    z-index: 1;

    span,
    span::before,
    span::after {
        display: block;
        position: absolute;

        width: 100%;
        height: 2px;

        background-color: #fff;

        transition-duration: 0.25s;
    }

    span::before {
        content: '';
        top: -8px;
    }
    span::after {
        content: '';
        top: 8px;
    }
`;

export const CloseBtn = styled.a`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
`;
export const SidePanel = styled.div`
    height: 100%; /* Specify a height */
    width: 250px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0;
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.8s all; /* 0.5 second transition effect to slide in the sidepanel */
    /* display: flex;
    flex-direction: column; */
    a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
`;
