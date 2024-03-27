import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





export function Footer(props) {
    

    return (
        <>
        <div className=' max-h-max space-y-6 w-full bg-white '>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5 py-3 mx-2'>
                <div className='max-h-max w-full px-3 py-3 mx-1 my-2 text-xl text-justify font-normal'>
                <span>    
                 <img src="image/logo.png" alt="logo" className='h-16 '  />
                </span>
                <p>We are One Stop Company, offering range of cyber security and data privacy services and solutions to Secure, Safeguard and Protect your Business Enablers and Build Digital Trust among your customers.</p>
                </div>
                <div className='max-h-max w-full px-3 py-3 mx-1 my-2 text-xl text-justify font-normal'>
                    <div>
                    <h1 className='text-2xl text-blue-950 font-semibold'>Contact Us</h1>
                    <p className='flex text-xl py-auto px-3 font-bold opacity-80'><span className='pt-2 pe-3'><MdEmail /></span>Email</p>
                    <p className='ps-12 opacity-80'>contact@transconst.com</p>
                    </div>
                    
                    <div>
                    <p className='flex text-xl py-auto px-3 font-bold  opacity-80'><span className='pt-2 pe-3'><BsFillTelephoneFill /></span>Phone</p>
                    <p className='ps-12 opacity-80'><span>+91</span><span className='px-2'>8454800476</span></p>
                    </div>

                    <div>
                    <p className='flex text-xl py-auto px-3 font-bold  opacity-80'><span className='pt-2 pe-3'><FaLocationDot /></span>Address</p>
                    <p className='ps-12 opacity-80'><span>+91</span><span className='px-2 text-base'>406,Sai Janak Classic, Sudhir Phadke Flyover, Borivali West, Mumbai, Maharashtra, India - 400103</span></p>
                    </div>
                </div>
                <div className='max-h-max w-full px-3 py-3 mx-1 my-2 text-xl text-justify font-normal'>
                <h1 className='text-2xl text-blue-950 font-semibold'>Company</h1>
                <ul className='text-lg py-2 opacity-80'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Solutions</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Work With Us</li>
                    <li>Privacy and Cookie Policy</li>
                </ul>
                </div>
                <div className='max-h-max w-full px-3 py-3 mx-1 my-2 text-xl text-justify font-normal'>
                <h1 className='text-2xl text-blue-950 font-semibold'>Latest Blogs</h1>
                <div className='flex py-3'>
                <div>
                    <img className='h-24 w-24 rounded-lg' src="image/blog-dg-1.jpg" alt="" />
                </div>
                <div className='w-52'>
                <p className='flex text-sm px-3'><span className='pt-1'><IoTimeOutline /></span>07-May-2020</p>
                <p className='text-base px-3 font-semibold text-blue-950'>Aarogya Setu App – Protecting Life and Privacy, Isn’t It?</p>
                </div>
                </div>

                <div className='flex py-3'>
                <div>
                    <img className='h-24 w-20 rounded-lg' src="image/blog-dg-2.jpg" alt="" />
                </div>
                <div className='w-52'>
                <p className='flex text-sm px-3'><span className='pt-1'><IoTimeOutline /></span>13-Jan-2021</p>
                <p className='text-base px-3 font-semibold text-blue-950'>Find out Yourself - Is Your Privacy Intact, Secure and Protected</p>
                </div>
                </div>

                </div>
            </div>
        </div>
       <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 py-3 px-6 gap-6 '>
        <div className='max-h-max py-4 px-4 text-xl  w-full bg-white '>
            <p>© 2022. All Rights Reserved By TransConST</p>
        </div>
        <div className='max-h-max py-4 px-4 text-xl items-center  w-full bg-white'>
            <p className='flex space-x-5 opacity-70 '><FaLinkedin /><FaTwitter /><MdOutlineFacebook /></p>
        </div>
        </div>
        

        </>
    )
}
