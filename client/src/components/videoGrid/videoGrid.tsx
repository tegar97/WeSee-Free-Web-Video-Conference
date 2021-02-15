// @ts-nochecsk

//@ts-nocheck
import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { useAuth } from '../../context/AuthContext';
import hark from 'hark';
import { FullScreenContainer, VideoContainer, VideoMenu } from './videoGrid.styles';
import { FullScreen } from 'react-full-screen';
import { useMediaQuery } from 'react-responsive';

const Video = (props) => {
    const ref = useRef(null);
    console.log('peersasfasfasfsf', props);

    useEffect(() => {
        console.log(props.peer);
        props.peer.on('stream', (stream) => {
            ref.current.srcObject = stream;
            console.log('stream', stream);
            var options = {};

            const speechEvents = hark(stream, options);
            speechEvents.on('speaking', function () {
                console.log('speaking');
                ref.current.style.border = '8px solid #19ff57';
            });
            speechEvents.on('stopped_speaking', function () {
                console.log('stopped_speaking');
                ref.current.style.border = '';
            });

            console.log(stream.getAudioTracks()[0].enabled);
        });
    }, [props.peer]);

    return (
        <>
            <video
                onClick={() => props.pinVideo()}
                style={{ width: '100%', objectFit: 'cover' }}
                playsInline
                autoPlay
                ref={ref}
                id="video"
            />
        </>
    );
};

const SelfVideo = () => {
    return <h1>tes</h1>;
};
const VideoGrid = ({ userVideo, peers, users, handleShareScreen }) => {
    const {}: any = useAuth();
    const [pin, setPin] = useState(false);
    const videoUsersPin = useRef();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    console.log(pin);
    console.log(peers);
    useEffect(() => {
        function recalculateLayout() {
            const gallery = document.getElementById('gallery');
            const aspectRatio = 16 / 9;
            const screenWidth = document.body.getBoundingClientRect().width;
            const screenHeight = document.body.getBoundingClientRect().height;
            const videoCount = pin ? 1 : document.getElementsByTagName('video').length;

            function calculateLayout(
                containerWidth: number,
                containerHeight: number,
                videoCount: number,
                aspectRatio: number,
            ): { width: number; height: number; cols: number } {
                let bestLayout = {
                    area: 0,
                    cols: 0,
                    rows: 0,
                    width: 0,
                    height: 0,
                };

                for (let cols = 1; cols <= videoCount; cols++) {
                    const rows = Math.ceil(videoCount / cols);
                    const hScale = containerWidth / (cols * aspectRatio);
                    const vScale = containerHeight / rows;
                    let width;
                    let height;
                    if (hScale <= vScale) {
                        width = Math.floor(containerWidth / cols);
                        height = Math.floor(width / aspectRatio);
                    } else {
                        height = Math.floor(containerHeight / rows);
                        width = Math.floor(height * aspectRatio);
                    }
                    const area = width * height;
                    if (area > bestLayout.area) {
                        bestLayout = {
                            area,
                            width,
                            height,
                            rows,
                            cols,
                        };
                    }
                }
                return bestLayout;
            }

            const { width, height, cols } = calculateLayout(screenWidth, screenHeight, videoCount, aspectRatio);

            gallery.style.setProperty('--width', width + 'px');
            gallery.style.setProperty('--height', height + 'px');
            gallery.style.setProperty('--cols', cols + '');
        }

        const debouncedRecalculateLayout = debounce(recalculateLayout, 50);
        window.addEventListener('resize', debouncedRecalculateLayout);
        debouncedRecalculateLayout();
    }, [pin, peers]);

    useEffect(() => {
        const video = document.getElementById('video');
        const getVideoPin = document.getElementById('pin');
        const userVideo = document.getElementById('userVideo');
        const videoGroup = document.getElementById('videoGroup');
        const gallery = document.getElementById('gallery');
        const roomContainer = document.getElementById('roomContainer');
        const videoMenu = document.getElementById('videoMenu');

        const videoUnpin = [];

        if (pin) {
            userVideo.style.display = 'none';
            gallery.style.alignItems = 'flex-start';
            gallery.style.justifyContent = 'center';

            if (videoGroup) {
                videoGroup.style.display = 'none';
            }
        } else {
            if (videoGroup) {
                videoGroup.style.display = 'block';
            }
            userVideo.style.display = 'block';
        }
    }, [pin, peers]);

    const pinVideo = () => {
        videoUsersPin.current.id = 'pin';
        setPin(true);
    };
    const unpin = () => {
        videoUsersPin.current.id = 'videoGroup';
        setPin(false);
    };

    return (
        <>
            <div id="gallery" style={{ justifyContent: isTabletOrMobile && users > 2 ? 'flex-start' : 'center' }}>
                <div className="video-container" id="userVideo">
                    <video
                        style={{ width: '100%', objectFit: 'cover' }}
                        muted
                        ref={userVideo}
                        autoPlay
                        playsInline
                    ></video>

                    <div
                        style={{
                            position: 'absolute',
                            background: 'rgba(0,0,0,.8)',
                            bottom: '0',
                            left: '2px',
                            color: '#fff',
                        }}
                    ></div>
                </div>

                {peers.map((peer, index) => {
                    return (
                        <>
                            <div className="video-container" ref={videoUsersPin} id="videoGroup">
                                {peer ? (
                                    <Video pinVideo={pinVideo} setPin={setPin} key={index} peer={peer} />
                                ) : (
                                    'Loading ...'
                                )}
                                <div
                                    style={{
                                        position: 'absolute',
                                        background: 'rgba(0,0,0,.8)',
                                        top: '50%',
                                        left: '50%',
                                        right: 'auto',
                                        bottom: 'auto',
                                        color: '#fff',
                                        textAlign: 'center',
                                        display: 'none',
                                    }}
                                    id="videoMenu"
                                    onClick={() => unpin()}
                                ></div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default VideoGrid;
