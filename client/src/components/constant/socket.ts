import { io } from 'socket.io-client';
export const ENDPOINT = process.env.NODE_ENV === 'production' ?  'https://backend2.tegar.cyou/':   'http://localhost:5000/';

export const  socket = io(ENDPOINT);
