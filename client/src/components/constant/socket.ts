import { io } from 'socket.io-client';
export const ENDPOINT = process.env.NODE_ENV === 'production' ?  'https://backend.tegar.me/':   'http://localhost:5000/';
export const ENDPOINT2 ='https://rtcmulticonnection.herokuapp.com:443/'

export const  socket = io(ENDPOINT);
export const  socket2 = io(ENDPOINT2);
