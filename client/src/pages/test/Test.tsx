// @ts-nocheck

import { useEffect } from 'react';
import * as bodyPix from '@tensorflow-models/body-pix';

function Test() {
    useEffect(() => {
        const videoElement = document.getElementById('video');
        const canvas = document.getElementById('canvas');

        const startBtn = document.getElementById('start-btn');
        const stopBtn = document.getElementById('stop-btn');
        const blurBtn = document.getElementById('blur-btn');
        const unblurBtn = document.getElementById('unblur-btn');

        const ctx = canvas.getContext('2d');

        startBtn.addEventListener('click', (e) => {
            startBtn.disabled = true;
            stopBtn.disabled = false;

            unblurBtn.disabled = false;
            blurBtn.disabled = false;

            startVideoStream();
        });

        stopBtn.addEventListener('click', (e) => {
            startBtn.disabled = false;
            stopBtn.disabled = true;

            unblurBtn.disabled = true;
            blurBtn.disabled = true;

            unblurBtn.hidden = true;
            blurBtn.hidden = false;

            videoElement.hidden = false;
            canvas.hidden = true;

            stopVideoStream();
        });

        blurBtn.addEventListener('click', (e) => {
            blurBtn.hidden = true;
            unblurBtn.hidden = false;

            videoElement.hidden = true;
            canvas.hidden = false;

            loadBodyPix();
        });

        unblurBtn.addEventListener('click', (e) => {
            blurBtn.hidden = false;
            unblurBtn.hidden = true;

            videoElement.hidden = false;
            canvas.hidden = true;
        });

        videoElement.onplaying = () => {
            canvas.height = videoElement.videoHeight;
            canvas.width = videoElement.videoWidth;
        };

        function startVideoStream() {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: false })
                .then((stream) => {
                    videoElement.srcObject = stream;
                    videoElement.play();
                })
                .catch((err) => {
                    startBtn.disabled = false;
                    blurBtn.disabled = true;
                    stopBtn.disabled = true;
                    alert(`Following error occured: ${err}`);
                });
        }

        function stopVideoStream() {
            const stream = videoElement.srcObject;

            stream.getTracks().forEach((track) => track.stop());
            videoElement.srcObject = null;
        }

        function loadBodyPix() {
            let options = {
                multiplier: 0.75,
                stride: 32,
                quantBytes: 4,
            };
            window.bodyPix
                .load(options)
                .then((net) => perform(net))
                .catch((err) => console.log(err));
        }

        async function perform(net) {
            while (startBtn.disabled && blurBtn.hidden) {
                const segmentation = await net.segmentPerson(video212);

                const backgroundBlurAmount = 6;
                const edgeBlurAmount = 2;
                const flipHorizontal = true;

                window.bodyPix.drawBokehEffect(
                    canvas,
                    videoElement,
                    segmentation,
                    backgroundBlurAmount,
                    edgeBlurAmount,
                    flipHorizontal,
                );
            }
        }
    }, []);
    return (
        <div>
            <main role="main">
                <section className="text-center jumbotron">
                    <div className="container">
                        <h1>Live!</h1>
                    </div>
                </section>
                <div className="py-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-6">
                                <center>
                                    <div className="mb-4 shadow-sm card">
                                        <center>
                                            <video id="video" width="480" height="320" autoPlay playsInline></video>
                                        </center>
                                        <center>
                                            <canvas hidden id="canvas"></canvas>
                                        </center>
                                        <div className="card-body">
                                            <h5 className="card-title">Video Stream</h5>
                                            <p className="card-text">
                                                Start and Stop to play the live video stream. Toggle between blur and
                                                unblur to blur the background in the stream
                                            </p>
                                            <div className="justify-content-between align-items-center">
                                                <div className="btn-group btn-group-sm">
                                                    <button
                                                        id="start-btn"
                                                        type="button"
                                                        className="btn btn-sm btn-outline-success"
                                                    >
                                                        Start
                                                    </button>
                                                    <button
                                                        id="blur-btn"
                                                        type="button"
                                                        className="btn btn-sm btn-outline-secondary"
                                                        disabled
                                                    >
                                                        Blur
                                                    </button>
                                                    <button
                                                        id="unblur-btn"
                                                        type="button"
                                                        className="btn btn-sm btn-outline-secondary"
                                                        hidden
                                                    >
                                                        Unblur
                                                    </button>
                                                    <button
                                                        id="stop-btn"
                                                        type="button"
                                                        className="btn btn-sm btn-outline-danger"
                                                        disabled
                                                    >
                                                        Stop
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Test;
