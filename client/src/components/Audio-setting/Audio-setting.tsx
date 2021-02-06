// @ts-nocheck

import React, { useEffect } from 'react';
import { AudioSettingContainer, AudiSettingText, Select } from './Audio-setting.styles';
function AudioSetting() {
    useEffect(() => {
        const audioInputSelect = document.querySelector('select#audioSource');
        const audioOutputSelect = document.querySelector('select#audioOutput');
        audioOutputSelect.disabled = !('sinkId' in HTMLMediaElement.prototype);
    }, []);
    return (
        <AudioSettingContainer>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div>
                    <AudiSettingText className="text-white text-1xl text-bold">Mikrofon</AudiSettingText>
                    <div style={{ display: 'flex' }}>
                        <Select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </Select>
                    </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <AudiSettingText className="text-white text-1xl text-bold">Speaker</AudiSettingText>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </Select>
                    </div>
                </div>
            </div>
        </AudioSettingContainer>
    );
}

export default AudioSetting;
