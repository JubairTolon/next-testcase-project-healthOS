import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';
import { useForm } from 'react-hook-form';


const Header = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    return (
        <nav className='h-16 bg-base-300 flex items-center px-4 justify-between'>
            <div className='flex items-center'>
                <span className='w-16 lg:hidden'></span>
                <div className=''>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit(onSubmit)}>
                        <button type='submit' className='text-lg cursor-pointer lg:ml-4'><BsSearch /></button>
                        <input
                            type="text"
                            placeholder='search'
                            className='h-8 rounded w-56 outline-1 outline-green-400 border border-green-400 bg-transparent focus:outline-none p-2 text-sm hidden lg:flex'
                            {...register("search")}
                        />
                    </form>
                </div>
            </div>
            <div className='flex gap-2 lg:gap-6 items-center'>
                <Link href='/'>
                    <button className='h-8 lg:h-10 w-20 lg:w-28 bg-green-500 rounded-md text-sm font-medium text-md active:bg-transparent active:border border-green-500'>Dashboard</button>
                </Link>
                <Link href='/login'>
                    <button className='h-8 lg:h-10 w-20 lg:w-28 border border-green-400 rounded-3xl font-medium text-sm lg:text-md active:text-green-400'>Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;