import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
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
                    <input
                        className='rounded-md w-full h-10 mb-2 px-3'
                        type="cel"
                        name="phone"
                        id="phone"
                        placeholder='+880'
                        {...register("phone", {
                            required: {
                                value: true,
                                message: 'Enter your phone number'
                            }
                        })} />
                    <label htmlFor="phone">
                        {errors.phone?.type === 'required' && <span className='text-red-500 text-sm'>{errors.phone?.message}</span>}
                        {errors.phone?.type === 'minLength' && <span className='text-red-500 text-sm'>{errors.phone?.message}</span>}
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
                                message: 'password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'must be 6 characters or longer'
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