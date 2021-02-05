// @ts-nochecsk

import { useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
import { useAuth } from '../../context/AuthContext';

const Video = (props) => {
    const ref = useRef(null);
    console.log('peers', props.peer);

    useEffect(() => {
        props.peer.on('stream', (stream) => {
            ref.current.srcObject = stream;
            console.log(stream.getAudioTracks()[0].enabled);
        });
    }, [props.peer, ref]);

    return (
        <>
            <video style={{ width: '100%', objectFit: 'cover' }} playsInline autoPlay ref={ref} />;
        </>
    );
};

const VideoGrid = ({ userVideo, peers }) => {
    const {}: any = useAuth();
    useEffect(() => {
        function recalculateLayout() {
            const gallery = document.getElementById('gallery');
            const aspectRatio = 16 / 9;
            const screenWidth = document.body.getBoundingClientRect().width;
            const screenHeight = document.body.getBoundingClientRect().height;
            const videoCount = document.getElementsByTagName('video').length;

            // or use this nice lib: https://github.com/fzembow/rect-scaler
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

                // brute-force search layout where video occupy the largest area of the container
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
    }, [peers]);
    return (
        <div id="gallery">
            <div className="video-container">
                <video style={{ width: '100%', objectFit: 'cover' }} muted ref={userVideo} autoPlay playsInline></video>
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
                    <div className="video-container">
                        {peer ? <Video key={index} peer={peer} /> : 'Loading ...'}
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
                );
            })}{' '}
            : ''
        </div>
    );
};

export default VideoGrid;
