// @ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class LandingPage extends React.Component {
    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };

    render() {
        return (
            <div style={{ height: '1000px', width: '1000px', padding: '10px' }}>
                <Draggable bounds="parent" scale={1}>
                    <div style={{ width: '1rem' }}>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default LandingPage;
