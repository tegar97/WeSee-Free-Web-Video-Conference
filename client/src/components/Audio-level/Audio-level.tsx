//@ts-nocheck
import React, { useEffect } from 'react';
import { SoundMeter } from './soundmeters';

function Audiolevel() {
    useEffect(() => {
        const startButton = document.getElementById('startButton');
        const stopButton = document.getElementById('stopButton');
        startButton.onclick = start;
        stopButton.onclick = stop;

        const instantMeter = document.querySelector('#instant meter');
        const slowMeter = document.querySelector('#slow meter');
        const clipMeter = document.querySelector('#clip meter');

        const instantValueDisplay = document.querySelector('#instant .value');
        const slowValueDisplay = document.querySelector('#slow .value');
        const clipValueDisplay = document.querySelector('#clip .value');

        // Put variables in global scope to make them available to the browser console.
        const constraints = (window.constraints = {
            audio: true,
            video: false,
        });

        let meterRefresh = null;

        function handleSuccess(stream) {
            // Put variables in global scope to make them available to the
            // browser console.
            window.stream = stream;
            const soundMeter = (window.soundMeter = new SoundMeter(window.audioContext));
            soundMeter.connectToSource(stream, function (e) {
                if (e) {
                    alert(e);
                    return;
                }
                meterRefresh = setInterval(() => {
                    instantMeter.value = instantValueDisplay.innerText = soundMeter.instant.toFixed(2);
                    slowMeter.value = slowValueDisplay.innerText = soundMeter.slow.toFixed(2);
                    clipMeter.value = clipValueDisplay.innerText = soundMeter.clip;
                }, 200);
            });
        }

        function handleError(error) {
            console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
        }

        function start() {
            console.log('Requesting local stream');
            startButton.disabled = true;
            stopButton.disabled = false;

            try {
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                window.audioContext = new AudioContext();
            } catch (e) {
                alert('Web Audio API not supported.');
            }

            navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
        }

        function stop() {
            console.log('Stopping local stream');
            startButton.disabled = false;
            stopButton.disabled = true;

            window.stream.getTracks().forEach((track) => track.stop());
            window.soundMeter.stop();
            clearInterval(meterRefresh);
            instantMeter.value = instantValueDisplay.innerText = '';
            slowMeter.value = slowValueDisplay.innerText = '';
            clipMeter.value = clipValueDisplay.innerText = '';
        }
    }, []);
    return (
        <div id="meters">
            <div id="instant">
                <div className="label">Instant:</div>
                <meter high="0.25" max="1" value="0"></meter>
                <div className="value"></div>
            </div>
            <div id="slow">
                <div className="label">Slow:</div>
                <meter high="0.25" max="1" value="0"></meter>
                <div className="value"></div>
            </div>
            <div id="clip">
                <div className="label">Clip:</div>
                <meter max="1" value="0"></meter>
                <div className="value"></div>
            </div>
            <button type="button" id="startButton">
                Start
            </button>
            <button type="button" id="stopButton" disabled>
                Stop
            </button>
        </div>
    );
}

export default Audiolevel;
