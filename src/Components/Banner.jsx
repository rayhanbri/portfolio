import React from 'react';
import image from '../assets/image.jpg'
import { Github, Linkedin } from 'lucide-react';


const Banner = () => {
    return (
        <div className="hero bg-[#D7D7D7] ">
            <div className="hero-content  flex-col md:flex-row-reverse">
                <img
                    src={image}
                    className="w-2xs bg-[#D7D7D7] rounded-lg shadow-2xl"
                />
                <div className='raleway space-y-2'>
                    <h1 className='font-bold'>Hi, I am</h1>
                    <h1 className="text-5xl font-bold">Md.Rayhan</h1>
                    <h2 className='text-sm font-semibold text-gray-600'>MERN Stack Developer / Frontend Specalist</h2>

                    <div className='flex space-x-3'>
                        <a
                            href='https://github.com/rayhanbri'
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="bg-[#C4C4C4] p-2 shadow-sm"><Github></Github></button>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/md-rayhan-794949319/'
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="bg-[#C4C4C4] p-2 shadow-sm"><Linkedin></Linkedin></button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;