import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineMenu } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineCategory } from 'react-icons/md';
import { RiProductHuntLine } from 'react-icons/ri';
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';

const Dashboard = () => {
    return (
        <div className='min-h-screen flex flex-row-reverse'>
            <div className="drawer drawer-mobile relative">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center absolute">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden fixed top-5 left-9 cursor-pointer">
                        <span className='text-2xl'><HiOutlineMenu /></span>
                    </label>

                    <div className=''>
                        <div className='flex items-center justify-between px-10 lg:mt-12'>
                            <span>
                                <h1 className='text-2xl'>Welcome to <span className='font-bold text-orange-400'>Dashboard</span></h1>
                            </span>
                            <select className="select bg-transparent border border-green-500 w-48">
                                <option className='bg-green-400' selected>Today</option>
                                <option className='bg-green-400'>Last week</option>
                                <option className='bg-green-400'>Last month</option>
                            </select>
                        </div>
                        <div className='cursor-pointer px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 py-10'>
                            <Link href='/orders'>
                                <div className='p-6 hover:scale-105 transition-transform duration-200 ease-in-out rounded-lg w-full h-fit object-cover border border-green-400 bg-base-300'>
                                    <div className='flex flex-col justify-center'>
                                        <p className='uppercase text-sm lg:text-md font-semibold mb-4'>Orders</p>
                                        <h1 className='text-xl lg:text-4xl'>{295}</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/total-sales'>
                                <div className='p-6 hover:scale-105 transition-transform duration-200 ease-in-out rounded-lg w-full h-fit object-cover border border-green-400 bg-base-300'>
                                    <div className='flex flex-col justify-center'>
                                        <p className='uppercase text-sm lg:text-md font-semibold mb-4'>Total sales</p>
                                        <h1 className='uppercase text-xl lg:text-4xl'>{102030} BDT</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/store-views'>
                                <div className='p-6 hover:scale-105 transition-transform duration-200 ease-in-out rounded-lg w-full h-fit object-cover border border-green-400 bg-base-300'>
                                    <div className='flex flex-col justify-center'>
                                        <p className='uppercase text-sm lg:text-md font-semibold mb-4'>Store views</p>
                                        <h1 className='text-xl lg:text-4xl'>{295}</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/product-views'>
                                <div className='p-6 hover:scale-105 transition-transform duration-200 ease-in-out rounded-lg w-full h-fit object-cover border border-green-400 bg-base-300'>
                                    <div className='flex flex-col justify-center'>
                                        <p className='uppercase text-sm lg:text-md font-semibold mb-4'>Product views</p>
                                        <h1 className='text-xl lg:text-4xl'>{295}</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu lg:p-4 w-60 lg:w-80 bg-green-600 text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li className='hover:bg-green-500 rounded-md text-md lg:text-xl mt-2'><Link href='/dashboard' className='active:bg-green-500'>
                            <span className='flex gap-2 items-center'><AiOutlineHome />Dashboard</span>
                        </Link></li>
                        <li className='hover:bg-green-500 rounded-md text-md lg:text-xl mt-2'><Link href='/orders' className='active:bg-green-500'>
                            <span className='flex gap-2 items-center'><AiOutlineShoppingCart />Orsers</span>
                        </Link></li>
                        <li className='hover:bg-green-500 rounded-md text-md lg:text-xl mt-2'><Link href='/products' className='active:bg-green-500'>
                            <span className='flex gap-2 items-center'><RiProductHuntLine />Products</span>
                        </Link></li>
                        <li className='hover:bg-green-500 rounded-md text-md lg:text-xl mt-2'><Link href='/categiries' className='active:bg-green-500'>
                            <span className='flex gap-2 items-center'><MdOutlineCategory />Categories</span>
                        </Link></li>
                        <li className='hover:bg-green-500 rounded-md text-md lg:text-xl mt-2'><Link href='/custpmers' className='active:bg-green-500'>
                            <span className='flex gap-2 items-center'><FiUsers />Customers</span>
                        </Link></li>
                        <li className='hover:bg-green-500 rounded-md text-md lg:text-xl mt-2'><Link href='/setting' className='active:bg-green-500'>
                            <span className='flex gap-2 items-center'><IoSettingsOutline />Setting</span>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


