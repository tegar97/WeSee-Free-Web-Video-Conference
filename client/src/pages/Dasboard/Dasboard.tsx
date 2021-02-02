import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Dasboard: React.FC = () => {
    const { currentUser }: any = useAuth();
    console.log(currentUser);

    return <div>{currentUser.email}</div>;
};

export default Dasboard;
