import Link from 'next/link';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RecaptchaVerifier } from "firebase/auth";
import auth from '@/firebase-config';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from '../../styles/Register.module.css';
import { isValidPhoneNumber } from 'react-phone-number-input';



const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, reset, control } = useForm();

    const handleValidate = (value) => {
        const isValid = isValidPhoneNumber(value);
        return isValid
    }
    const onSubmit = (data) => {
        console.log(data);
        onRecapVerify();
        onSignInSubmit(data.phone)
        reset();
    };

    const onRecapVerify = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'normal',
            'callback': (response) => {
                console.log('callback', response)
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
            }
        }, auth);
    }

    const onSignInSubmit = (phone) => {
        const phoneNumber = phone;
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
    }

    return (
        <div className='w-full min-h-screen'>
            <h2 className='text-3xl my-8 text-center text-green-500'>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='w-2/3 lg:w-1/3 mx-auto border border-green-500 flex flex-col p-6 lg:p-6 rounded-md'>
                    <label htmlFor="name" className="mb-2">Name</label>
                    <input
                        className='rounded-md w-full h-10 mb-2 px-3'
                        type="text"
                        name="name"
                        id="name"
                        placeholder='your name'
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Enter your user name'
                            }
                        })} />
                    <label htmlFor="name">
                        {errors.name?.type === 'required' && <span className='text-red-500 text-sm'>{errors.name?.message}</span>}
                        {errors.name?.type === 'minLength' && <span className='text-red-500 text-sm'>{errors.name?.message}</span>}
                    </label>
                    <label htmlFor="phone" className="mb-2 mt-4">Phone</label>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{
                            validate: (value) => handleValidate(`${value}`)
                        }}

                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                id="phone"
                                className={styles.PhoneInput}
                                international
                                placeholder="Enter phone number"
                                value={value}
                                defaultCountry="BD"
                                countryCallingCodeEditable={false}
                                onChange={onChange}
                            />
                        )}
                    />
                    <label htmlFor="phone" className='mt-2'>
                        {errors["phone"] && <span className='text-red-500 text-sm'>Invalid phone number</span>}
                    </label>
                    <label htmlFor="phone" className="mb-2 mt-4">Password</label>
                    <input
                        className='rounded-md w-full h-10 mb-2 px-3'
                        type="password"
                        name="password"
                        id="password"
                        placeholder='password'
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be 6 characters or longer'
                            }
                        })}
                    />
                    <label htmlFor="password">
                        {errors.password?.type === 'required' && <span className='text-red-500 text-sm'>{errors.password?.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-500 text-sm'>{errors.password?.message}</span>}
                    </label>
                    <small className='mt-4'>Already have an account? please <Link className='text-green-400 m1-3' href={'/login'}>Login</Link></small>
                    <button type='submit' className='mt-10 h-10 w-2/3 g:w-48 mx-auto bg-green-500 rounded-sm text-sm font-medium text-md active:bg-transparent active:border border-green-500'>Register</button>
                </div>
            </form >
        </div >
    );
};

export default SignUp;