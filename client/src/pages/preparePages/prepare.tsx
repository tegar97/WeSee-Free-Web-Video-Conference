// @ts-nocheck
import { useEffect } from 'react';
function Prepare() {
    useEffect(() => {
        var designer = new CanvasDesigner();
        const getBoard = document.getElementById('board');
        designer.addSyncListener(function (data) {
            designer.send(JSON.stringify(data));
        });

        // both links are mandatory
        // widget.html will internally use widget.js
        designer.widgetHtmlURL = 'https://www.webrtc-experiment.com/Canvas-Designer/widget.html'; // you can place this file anywhere
        designer.widgetJsURL = 'https://www.webrtc-experiment.com/Canvas-Designer/widget.js';
        designer.appendTo(getBoard);
    });

    return <div id="board" style={{ height: '100vh' }}></div>;
}

export default Prepare;
