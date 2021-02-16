import { io } from 'socket.io-client';
export const ENDPOINT = process.env.NODE_ENV === 'production' ?  'https://backend.tegar.me/':   'http://localhost:5000/';

export const  socket = io(ENDPOINT);
