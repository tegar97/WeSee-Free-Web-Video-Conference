import React, { useRef, useState } from 'react';
import { useAuth } from './../../context/AuthContext';

const Login: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null!);
    const passwordRef = useRef<HTMLInputElement>(null!);
    const [error, setError] = useState<String>('');
    const [loading, setLoading] = useState<Boolean>(false);
    const { login }: any = useAuth();

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);

        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch (error) {
            setError('Failed to create an account');
        }
        setLoading(false);

        try {
        } catch (error) {}
    }
    return (
        <div>
            {error && 'error'}
            <form onSubmit={handleSubmit}>
                <div id="email">
                    <label>Email</label>
                    <input type="email" ref={emailRef} required style={{ border: '1px solid #000' }} />
                </div>
                <div id="email">
                    <label>password</label>
                    <input type="password" ref={passwordRef} required style={{ border: '1px solid #000' }} />
                </div>

                <button className="w-100" type="submit">
                    {loading ? 'loading' : 'SIGN UP'}
                </button>
            </form>
        </div>
    );
};

export default Login;
