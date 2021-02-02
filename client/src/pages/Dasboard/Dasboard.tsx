import React, { useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase';
import { useHistory } from 'react-router-dom';

const Dasboard: React.FC = () => {
    let history = useHistory();

    const { currentUser }: any = useAuth();
    const joinRoomRef: any = useRef();
    const db = firebase.firestore();
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const CreateRoom = async () => {
        await db.collection('room').add({ roomId: uuidv4(), code: makeid(5), users: [currentUser.displayName] });
        console.log(currentUser.displayName);
    };
    const joinRoom = async () => {
        const usersCollection = db.collection('room');
        usersCollection
            .where('code', '==', joinRoomRef.current.value)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    history.push(`/room/${doc.data().roomId}`);
                });
            })
            .catch(function (error) {
                console.log('Error getting documents: ', error);
            });
    };

    return (
        <div>
            <button onClick={CreateRoom}>Create Room</button>

            <h1>JOIN ROOM</h1>
            <input ref={joinRoomRef} type="text" />
            <button onClick={joinRoom}>JOIN</button>
        </div>
    );
};

export default Dasboard;
