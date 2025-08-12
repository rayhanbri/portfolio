import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    setStatus("Message sent successfully!");
                    e.target.reset();
                },
                (error) => {
                    setStatus("Failed to send message, please try again.");
                    console.error(error.text);
                }
            );
    };

    return (
        <div className="bg-[#D7D7D7] ">
            <h2 className="text-3xl font-bold text-center mb-6 text-black">
                Contact Me
            </h2>
            <div className="max-w-md mx-auto mt-12 p-8 bg-white  rounded-lg shadow-lg">


                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="Enter your name"
                            className="input input-bordered w-full focus:outline-primary"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Your Email</span>
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            placeholder="Enter your email"
                            className="input input-bordered w-full focus:outline-primary"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Message</span>
                        </label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            placeholder="Write your message here..."
                            className="textarea textarea-bordered w-full resize-none focus:outline-primary"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn bg-black text-white w-full hover:bg-white hover:text-black transition duration-300"
                    >
                        Send Message
                    </button>

                    {status && (
                        <p
                            className={`mt-4 text-center font-medium ${status.includes("successfully") ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
