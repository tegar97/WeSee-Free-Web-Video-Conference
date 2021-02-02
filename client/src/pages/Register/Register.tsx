import React, { useRef, useState } from 'react';
import { useAuth } from './../../context/AuthContext';

const Register: React.FC = () => {
    const nameRef = useRef<HTMLInputElement>(null!);
    const emailRef = useRef<HTMLInputElement>(null!);
    const passwordRef = useRef<HTMLInputElement>(null!);
    const passwordConfirmRef = useRef<HTMLInputElement>(null!);
    const [error, setError] = useState<String>('');
    const [loading, setLoading] = useState<Boolean>(false);
    const [step1, setStep1] = useState<Boolean>(true);
    const { signUp, updateName, GoogleAuth }: any = useAuth();

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match');
        }

        try {
            await signUp(emailRef.current.value, passwordRef.current.value);
        } catch (error) {
            setError('Failed to create an account');
        }
        setLoading(false);
        setStep1(false);

        try {
        } catch (error) {}
    }

    async function nextStep(e: any) {
        e.preventDefault();
        setLoading(true);

        try {
            await updateName(nameRef.current.value);
        } catch (error) {
            setError('Failed to create an account');
        }
        setLoading(false);
    }
    return (
        <div>
            {error && 'error'}
            {step1 ? (
                <form onSubmit={handleSubmit}>
                    <div id="email">
                        <label>Email</label>
                        <input type="email" ref={emailRef} required style={{ border: '1px solid #000' }} />
                    </div>
                    <div id="email">
                        <label>password</label>
                        <input type="password" ref={passwordRef} required style={{ border: '1px solid #000' }} />
                    </div>
                    <div id="email">
                        <label>Password Confirmation</label>
                        <input type="password" ref={passwordConfirmRef} required style={{ border: '1px solid #000' }} />
                    </div>
                    <p>Atau Login dengan </p>
                    <button className="w-100" type="submit">
                        {loading ? 'loading' : 'SIGN UP'}
                    </button>
                </form>
            ) : (
                <form onSubmit={nextStep}>
                    <div id="email">
                        <label>Nama anda</label>
                        <input type="text" ref={nameRef} required style={{ border: '1px solid #000' }} />
                    </div>

                    <button className="w-100" type="submit">
                        {loading ? 'loading' : 'GO'}
                    </button>
                </form>
            )}
            <button onClick={GoogleAuth}>google</button>
        </div>
    );
};

export default Register;
