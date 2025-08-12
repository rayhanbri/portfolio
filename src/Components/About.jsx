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
                        I started my studies in Philosophy, where I learned to think deeply, solve problems, and see things from different angles. I’ve always loved reading—books have opened my mind to new ideas about how people think, connect, and create.

                        Over time, I wanted to turn my ideas into something real and useful. That’s when I found coding. It’s a place where logic and creativity work together, and where I can build things that people can actually use.

                        Now, I bring together what I learned from philosophy with my skills in web development, creating projects that are both thoughtful and functional. For me, every project has a story—and mine is driven by curiosity and a love of learning.
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
