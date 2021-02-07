//@ts-nocheck
import React, { useEffect } from 'react';
import { AudiSettingText } from '../Audio-setting/Audio-setting.styles';
import { SoundMeter } from './soundmeters';

function Audiolevel({ stream }) {
    useEffect(() => {
        const startButton = document.getElementById('startButton');
        const stopBotton = document.getElementById('stopButton');
        const audiotest = document.getElementById('audiotest');
        stopBotton.style.display = 'none';

        startButton.onclick = start;
        stopBotton.onclick = stop;

        const instantMeter = document.querySelector('#instant meter');

        const instantValueDisplay = document.querySelector('#instant .value');

        // Put variables in global scope to make them available to the browser console.
        const constraints = (window.constraints = {
            audio: true,
            video: false,
        });

        let meterRefresh = null;

        function handleSuccess(stream) {
            // Put variables in global scope to make them available to the
            // browser console.
            console.log('0', stream);
            console.log('1', window.audioContext);
            window.stream = stream;

            audiotest.srcObject = stream;
            console.log('trigger');
            const soundMeter = (window.soundMeter = new SoundMeter(window.audioContext));
            soundMeter.connectToSource(stream, function (e) {
                if (e) {
                    alert(e);
                    return;
                }
                meterRefresh = setInterval(() => {
                    instantMeter.value = instantValueDisplay.innerText = soundMeter.instant.toFixed(2);
                }, 200);
            });
        }

        function handleError(error) {
            console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
        }

        function start() {
            console.log('Requesting local stream');
            startButton.style.display = 'none';
            stopBotton.style.display = 'inline-block';

            try {
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                window.audioContext = new AudioContext();
            } catch (e) {
                alert('Web Audio API not supported.');
            }
            handleSuccess(stream);
        }

        function stop() {
            console.log('Stopping local stream');
            startButton.style.display = 'inline-block';
            stopBotton.style.display = 'none';

            window.stream.getTracks().forEach((track) => track.stop());
            window.soundMeter.stop();

            clearInterval(meterRefresh);
            instantMeter.value = instantValueDisplay.innerText = '';
        }
    }, [stream]);
    return (
        <div id="meters" className="mt-6">
            <AudiSettingText>Mic Test</AudiSettingText>
            <div id="instant" className="flex flex-row items-center mt-4">
                <button
                    type="button"
                    id="startButton"
                    className="text-lg"
                    style={{
                        backgroundColor: '#0e78f9',
                        color: '#fff',
                        width: '7rem',
                        height: 'auto',
                        padding: '.5rem .4rem',
                        border: 'none',
                    }}
                >
                    Lest Check
                </button>
                <button
                    type="button"
                    id="stopButton"
                    className="text-lg"
                    style={{
                        backgroundColor: '#0e78f9',
                        color: '#fff',
                        width: '7rem',
                        height: 'auto',
                        padding: '.5rem .4rem',
                        border: 'none',
                    }}
                >
                    Stop
                </button>
                <meter className="ml-3 " style={{ width: '100%' }} high="0.25" max="1" value="0"></meter>
                <div className="value"></div>
                <audio playsInline autoPlay id="audiotest" hidden />
            </div>
        </div>
    );
}

export default Audiolevel;
