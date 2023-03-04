import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Orders = ({ productData }) => {
    console.log(productData)
    return (
        <div className="overflow-x-hidden w-full lg:w-2/3 my-10 mx-auto">
            <span className='mb-10'>
                <h1 className='text-2xl mb-10'>Total <span className='font-bold text-orange-400'>Orders</span></h1>
            </span>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>User</th>
                        <th>Items</th>
                        <th>Items</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productData.map((order) => (
                            <tr key={order.id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <Image className='rounded-full' src="https://i.ibb.co/9bKmqsW/user.png" width={150} height={150} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order.userId}</div>
                                            <div className="text-sm opacity-50">Brazil</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Wyman-Ledner
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{order.date}</span>
                                </td>
                                <td>{order.products.length}</td>
                                <th>
                                    <Link href={'/viewOrder'}>
                                        <button className="btn btn-ghost btn-xs">View</button>
                                    </Link>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Orders;

export const getStaticProps = async () => {
    const data = await axios.get('https://fakestoreapi.com/carts');
    return {
        props: {
            productData: data.data,
        },

    };
};