import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiJsonwebtokens } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { Element } from "react-scroll";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="text-green-400" /> },
  { name: "Payment Integration", icon: <MdPayment className="text-purple-500" /> },
  { name: "REST API", icon: <FaDatabase className="text-indigo-500" /> },
];

const Skills = () => {
  return (
    <Element name="skills">
      <section id="skills" className="bg-[#D7D7D7] md:py-10 py-5  px-6 lg:px-20 font-poppins">
        <motion.h2
          className="text-2xl md:text-3xl basic-font font-semibold text-center md:mb-12 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center hover:bg-orange-50 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-lg font-medium raleway">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Skills;
