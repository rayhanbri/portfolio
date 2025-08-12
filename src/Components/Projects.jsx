import React from "react";
import { motion } from "framer-motion";
import metronest from "../assets/Screenshot 2025-08-12 183100.png"
import marathon from "../assets/marathon.png"
import { Element } from "react-scroll";

const projects = [
  {
    title: "Metronest",
    description:
      "A real estate platform built with the MERN stack. Features role-based dashboards for users, agents, and admins, property verification, wishlist, reviews, payment system, and advertisement section.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Stripe"],
    live: "https://module-49-2d879.web.app/",
    code: "https://github.com/rayhanbri/metronest-client",
    image: metronest
  },
  {
    title: "Marathon Hub",
    description:
      "A marathon management app using Node.js, Express, and MongoDB native driver. Includes marathon listings, registration, and user dashboards for tracking participation.",
    tech: ["Node.js", "Express", "MongoDB Native Driver", "Firebase Auth"],
    live: "https://all-practice-86417.web.app/",
    code: "https://github.com/rayhanbri/marathon-hub-demo",
    image: marathon
  }
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

const Projects = () => {
  return (
    <Element name="projects">
      <section className="bg-[#D7D7D7]  py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg transition p-6 flex flex-col hover:shadow-xl"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                  >
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </Element>
  );
};

export default Projects;
