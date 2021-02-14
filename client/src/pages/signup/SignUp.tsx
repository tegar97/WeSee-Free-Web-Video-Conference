import React, { useRef, useState } from 'react';
import { useAuth } from './../../context/AuthContext';

import { Link } from 'react-router-dom';

const SignUp: React.FC = ({ history }: any) => {
    const nameRef = useRef<HTMLInputElement>(null!);
    const emailRef = useRef<HTMLInputElement>(null!);
    const passwordRef = useRef<HTMLInputElement>(null!);
    const [error, setError] = useState<String>('');
    const [loading, setLoading] = useState<Boolean>(false);
    const [step2, setStep2] = useState<Boolean>(false);
    const { signUp, updateName }: any = useAuth();
    console.log(error);
    async function handleSubmit(e: any) {
        e.preventDefault();

        setLoading(true);

        try {
            await signUp(emailRef.current.value, passwordRef.current.value);
            setStep2(true);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);

        try {
        } catch (error) {}
    }

    async function formName(e: any) {
        e.preventDefault();
        setLoading(true);

        try {
            await updateName(nameRef.current.value);
            history.push('/');
            setStep2(false);
        } catch (error) {
            setError('Failed to create an account');
        }
        setLoading(false);
    }
    return (
        <div className="lg:grid lg:grid-cols-2 " style={{ width: '100%', height: '101vh', backgroundColor: '#191b28' }}>
            <div
                style={{ background: 'url("./register.jpg")', height: '100%', width: '100%', backgroundSize: 'cover' }}
                className="flex-col items-center justify-center hidden object-cover h-10 mb-2 lg:flex sm:hidden w-100"
            >
                <h1 className="text-5xl font-bold text-white">Welcome Back</h1>
                <p className="mt-3 text-xl font-medium text-center text-white">
                    To keep connect with us <br></br> please login with personal info
                </p>
            </div>
            <div className="flex flex-col items-center justify-start p-20 lg:mt-20">
                <h2 className="text-3xl font-bold " style={{ color: '#0E78F9' }}>
                    Sign Up To Wesee
                </h2>
                <div></div>
                {error && <span className="mt-5 text-red-300">{error}</span>}
                <div className="w-full">
                    {step2 ? (
                        <form onSubmit={formName}>
                            <div className="w-full mt-10">
                                <label className="text-white " htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full "
                                    placeholder="Enter Your Email"
                                    type="text"
                                    id="name"
                                    value=""
                                    ref={nameRef}
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderBottom: '1px solid rgba(255,255,255,.3)',
                                        outline: 'none',
                                        color: '#fff',
                                        padding: '.8rem .1rem',
                                    }}
                                />
                            </div>

                            <div className="block mt-5 lg:flex">
                                {loading ? (
                                    <button
                                        className="w-full p-2 text-white lg:w-1/6 "
                                        style={{ backgroundColor: '#0E78F9', borderRadius: '5px' }}
                                        disabled
                                    >
                                        Loading
                                    </button>
                                ) : (
                                    <button
                                        className="w-full p-2 text-white lg:w-1/6 "
                                        style={{ backgroundColor: '#0E78F9', borderRadius: '5px' }}
                                    >
                                        Sign Up
                                    </button>
                                )}

                                <Link
                                    to="/signin"
                                    className="lg:self-center lg:ml-5 "
                                    style={{ color: 'rgba(255,255,255,.5)' }}
                                >
                                    Already Have Account ?
                                    <span style={{ color: '#0E78F9', marginLeft: '8px' }}>Sign In Now</span>
                                </Link>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="w-full mt-10">
                                <label className="text-white " htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full "
                                    placeholder="Enter Your Email"
                                    type="email"
                                    id="email"
                                    ref={emailRef}
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderBottom: '1px solid rgba(255,255,255,.3)',
                                        outline: 'none',
                                        color: '#fff',
                                        padding: '.8rem .1rem',
                                    }}
                                />
                            </div>
                            <div className="w-full mt-10">
                                <label className="text-white " htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full "
                                    placeholder="Enter Your Password"
                                    type="password"
                                    id="password"
                                    ref={passwordRef}
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderBottom: '1px solid rgba(255,255,255,.3)',
                                        outline: 'none',
                                        color: '#fff',
                                        padding: '.8rem .1rem',
                                    }}
                                />
                            </div>
                            <div className="block mt-5 lg:flex">
                                {loading ? (
                                    <button
                                        className="w-full p-2 text-white lg:w-1/6 "
                                        style={{ backgroundColor: '#0E78F9', borderRadius: '5px' }}
                                        disabled
                                    >
                                        Loading
                                    </button>
                                ) : (
                                    <button
                                        className="w-full p-2 text-white lg:w-1/6 "
                                        style={{ backgroundColor: '#0E78F9', borderRadius: '5px' }}
                                    >
                                        Sign Up
                                    </button>
                                )}

                                <Link
                                    to="/signin"
                                    className="lg:self-center lg:ml-5 "
                                    style={{ color: 'rgba(255,255,255,.5)' }}
                                >
                                    Already Have Account ?
                                    <span style={{ color: '#0E78F9', marginLeft: '8px' }}>Sign In Now</span>
                                </Link>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUp;
