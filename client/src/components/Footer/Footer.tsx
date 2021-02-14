import React from 'react';
import { FooterContaiener, FooterGrid } from './Footer.styles';

function Footer() {
    return (
        <FooterContaiener>
            <FooterGrid>
                <div className="flex flex-col items-center col-span-2 text-center">
                    <img src="weSee.png" alt="logo 1" width="150" className="justify-items-center" />
                    <p className="mt-5">
                        Wesee is is a video call service that ensures everyone can be connected with just one click
                    </p>
                </div>
                <div className="ml-6 ">
                    <span className="text-xl font-bold">Link</span>
                    <ul className="mt-8 ">
                        <li className="mt-2">About</li>
                        <li className="mt-2">Feature</li>
                        <li className="mt-2">Review</li>
                    </ul>
                </div>
                <div className="ml-6">
                    <span className="text-xl font-bold">Service</span>
                    <ul className="mt-8 ">
                        <li className="mt-2">About</li>
                        <li className="mt-2">Feature</li>
                        <li className="mt-2">Review</li>
                    </ul>
                </div>
                <div className="ml-6">
                    <span className="text-xl font-bold">Contact</span>
                    <ul className="mt-8 ">
                        <li className="mt-2">About</li>
                        <li className="mt-2">Feature</li>
                        <li className="mt-2">Review</li>
                    </ul>
                </div>
                <div className="ml-6">
                    <span className="text-xl font-bold">Assets</span>
                    <ul className="mt-8 ">
                        <li className="mt-2">
                            <a href="https://storyset.com/">storyset.com</a>
                        </li>
                        <li className="mt-2">
                            <a href="https://unsplash.com/">unplash</a>
                        </li>
                    </ul>
                </div>
            </FooterGrid>
            <div className="mt-10 text-center">
                <span className="">© 2020 Wesee. All rights reserved</span>
            </div>
        </FooterContaiener>
    );
}

export default Footer;
