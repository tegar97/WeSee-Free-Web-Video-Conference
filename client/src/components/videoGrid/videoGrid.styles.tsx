import styled from 'styled-components';
import { FullScreen } from 'react-full-screen';

export const VideoContainer = styled.div`
    width: var(--width);
    height: var(--height);
    position: relative;
`;
export const VideoMenu = styled.div`
    position: 'absolute';
    background: 'rgba(0,0,0,.8)';
    top: '50%';
    left: '50%';
    right: 'auto';
    bottom: 'auto';
    color: '#fff';
    text-align: 'center';
`;

export const FullScreenContainer = styled(FullScreen)`
    width: var(--width);
    height: var(--height);
    position: relative;
`;
