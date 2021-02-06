// @ts-nocheck

import React, { useEffect } from 'react';
import { AudioSettingContainer, AudiSettingText, Select } from './Audio-setting.styles';
function AudioSetting({ stream, peers, userVideo }) {
    useEffect(() => {
        const videoElement = document.querySelector('#video2');
        const audioInputSelect = document.querySelector('select#audioSource');
        const audioOutputSelect = document.querySelector('select#audioOutput');
        const videoSelect = document.querySelector('select#videoSource');
        const selectors = [audioInputSelect, audioOutputSelect, videoSelect];

        audioOutputSelect.disabled = !('sinkId' in HTMLMediaElement.prototype);

        function gotDevices(deviceInfos) {
            // Handles being called several times to update labels. Preserve values.
            const values = selectors.map((select) => select.value);
            selectors.forEach((select) => {
                while (select.firstChild) {
                    select.removeChild(select.firstChild);
                }
            });
            for (let i = 0; i !== deviceInfos.length; ++i) {
                const deviceInfo = deviceInfos[i];
                const option = document.createElement('option');
                option.value = deviceInfo.deviceId;
                if (deviceInfo.kind === 'audioinput') {
                    option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
                    audioInputSelect.appendChild(option);
                } else if (deviceInfo.kind === 'audiooutput') {
                    option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
                    audioOutputSelect.appendChild(option);
                } else if (deviceInfo.kind === 'videoinput') {
                    option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
                    videoSelect.appendChild(option);
                } else {
                    console.log('Some other kind of source/device: ', deviceInfo);
                }
            }
            selectors.forEach((select, selectorIndex) => {
                if (Array.prototype.slice.call(select.childNodes).some((n) => n.value === values[selectorIndex])) {
                    select.value = values[selectorIndex];
                }
            });
        }

        navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);

        // Attach audio output device to video element using device/sink ID.
        function attachSinkId(element, sinkId) {
            if (typeof element.sinkId !== 'undefined') {
                element
                    .setSinkId(sinkId)
                    .then(() => {
                        console.log(`Success, audio output device attached: ${sinkId}`);
                    })
                    .catch((error) => {
                        let errorMessage = error;
                        if (error.name === 'SecurityError') {
                            errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
                        }
                        console.error(errorMessage);
                        // Jump back to first output device in the list as it's the default.
                        audioOutputSelect.selectedIndex = 0;
                    });
            } else {
                console.warn('Browser does not support output device selection.');
            }
        }

        function changeAudioDestination() {
            const audioDestination = audioOutputSelect.value;
            attachSinkId(videoElement, audioDestination);
        }

        function gotStream(screenStream) {
            window.stream = screenStream; // make stream available to console
            userVideo.current.srcObject = screenStream;
            peers.current[0].peer.replaceTrack(stream.getVideoTracks()[0], screenStream.getVideoTracks()[0], stream);
            videoElement.srcObject = screenStream;

            return navigator.mediaDevices.enumerateDevices();
        }

        function handleError(error) {
            console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
        }

        function start() {
            if (window.stream) {
                window.stream.getTracks().forEach((track) => {
                    track.stop();
                });
            }
            const audioSource = audioInputSelect.value;
            const videoSource = videoSelect.value;
            const constraints = {
                audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
                video: { deviceId: videoSource ? { exact: videoSource } : undefined },
            };
            navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
        }

        audioInputSelect.onchange = start;
        audioOutputSelect.onchange = changeAudioDestination;

        videoSelect.onchange = start;

        start();
    }, []);
    return (
        <AudioSettingContainer>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div>
                    <AudiSettingText className="text-white text-1xl text-bold">Camera</AudiSettingText>
                    <div
                        style={{
                            display: 'flex',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Select id="videoSource" style={{ width: '80%' }}></Select>
                        <video id="video2" playsInline autoPlay style={{ width: '100px', marginTop: '1rem' }} />
                    </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <AudiSettingText className="text-white text-1xl text-bold">Mikrofon</AudiSettingText>
                    <div style={{ display: 'flex' }}>
                        <Select id="audioOutput"></Select>
                    </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <AudiSettingText className="text-white text-1xl text-bold">Speaker</AudiSettingText>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Select id="audioSource"></Select>
                    </div>
                </div>
            </div>
        </AudioSettingContainer>
    );
}

export default AudioSetting;
