import React from 'react';
import { SettingSideBar as SettingSideBarContainer } from './../settings.styles';
function SettingSideBar() {
    return (
        <SettingSideBarContainer>
            <ul>
                <li>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            backgroundColor: '#0E78F9',
                            padding: '.5rem 1rem',
                            width: '90%',
                            borderTopRightRadius: '10rem',
                            borderBottomRightRadius: '10rem',
                            marginBottom: '1rem',
                        }}
                    >
                        <i className="text-xl fas fa-video"></i>
                        <p className="ml-5 text-md">Video</p>
                    </div>
                </li>
                <li>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',

                            padding: '.5rem 1rem',
                            width: '90%',
                            borderTopRightRadius: '10rem',
                            borderBottomRightRadius: '10rem',
                        }}
                    >
                        <i className="text-xl fas fa-video"></i>
                        <p className="ml-5 text-md">Video</p>
                    </div>
                </li>
            </ul>
        </SettingSideBarContainer>
    );
}

export default SettingSideBar;
