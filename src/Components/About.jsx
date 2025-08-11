import React from "react";
import profileImg from "../assets/image.jpg"
import { motion } from "framer-motion";


const About = () => {
    return (
        <section id="about" className="bg-[#D7D7D7]  py-5 px-6 md:px-20 ">
            <div className="flex flex-col md:flex-row items-center gap-12">

                {/* Image Section */}
                <motion.div
                    className="flex justify-center lg:w-1/3"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={profileImg}
                        alt="About Me"
                        className="rounded-2xl shadow-lg max-w-xs lg:max-w-sm"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="lg:w-2/3"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h2 className="  border-b  text-2xl md:3xl font-semibold basic-font mb-4">About Me</h2>
                    <p className="text-gray-600 raleway mb-4 leading-relaxed">
                        I'm a passionate <span className="text-black font-semibold">Web Developer</span>

                        who loves crafting clean, functional, and visually appealing websites.
                        With a strong focus on <span className="text-black font-semibold">MERN stack</span> development,
                        I create seamless digital experiences that not only look good but work flawlessly.
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        When I’m not coding, you’ll probably find me learning new tech,
                        exploring design ideas, or improving performance of my projects.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 hover:text-black transition"
                    >
                        Let’s Work Together
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
