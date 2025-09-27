import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

const Finis = () => {
    return (
        <div className='bg-black'>
            <div className='container-size text-white grid md:grid-cols-5 grid-cols-1 py-18 px-3 border-b border-gray-500'>
                <div className='w-[360px]'>
                    <h1 className='text-2xl font-bold mb-[10px]'>CS — Ticket System</h1>
                    <p>This project manages customer issues through a ticket system, ensuring quick responses, tracking problems, and providing solutions. It improves communication, reduces delays, and increases customer satisfaction with organized and efficient service.</p>
                </div>
                {/* Company */}
                <div className='w-[150px] md:ml-40 md:mt-0 mt-5'>
                    <h2 className='footer-heading'>Company</h2>
                    <ul>
                        <li><a className='anchor'>About Us</a></li>
                        <li><a className='anchor'>Our Mission</a></li>
                        <li><a className='anchor'>Contact Saled</a></li>
                    </ul>
                </div>
                {/* Service */}
                <div className='w-[150px] md:ml-24 md:mt-0 mt-5'>
                    <h2 className='footer-heading'>Service</h2>
                    <ul>
                        <li><a className='anchor'>Products & Service</a></li>
                        <li><a className='anchor'>Customer Stories</a></li>
                        <li><a className='anchor'>Download Apps</a></li>
                    </ul>
                </div>
                {/* Information */}
                <div className='w-[200px] md:ml-24 md:mt-0 mt-5'>
                    <h2 className='footer-heading'>Information</h2>
                    <ul>
                        <li><a className='anchor'>Privacy Policy</a></li>
                        <li><a className='anchor'>Terms & Conditions</a></li>
                        <li><a className='anchor'>Join Us</a></li>
                    </ul>
                </div>
                {/* Social links */}
                <div className='md:ml-10 md:mt-0 mt-5'>
                    <h2 className='footer-heading'>Social Links</h2>
                    <ul>
                        <li><a className='anchor '>
                            <div className='flex items-center mt-2'>
                            <BsTwitterX /> <span className='ml-2'>@CS-Ticket System</span>
                            </div>
                            </a>
                        </li>
                        <li><a className='anchor '>
                            <div className='flex items-center mt-2'>
                            <FaLinkedin /> <span  className='ml-2'>@CS-Ticket System</span>
                            </div>
                            </a>
                        </li>
                        <li><a className='anchor'>
                            <div className='flex items-center mt-2'>
                            <FaFacebook /> <span className='ml-2'>@CS-Ticket System</span>
                            </div>
                            </a>
                        </li>
                        <li><a className='anchor'>
                            <div className='flex items-center mt-2'>
                            <IoMdMail /> <span className='ml-2'>support@cst.com</span>
                            </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='copyright text-white flex justify-center py-5'>
                <div className='flex'>
                    <FaRegCopyright /> <span className='ml-2'>{new Date().getFullYear()} CS - Ticket System. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
};

export default Finis;