"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Loader from "../Loader";

const Contact = () => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (name === "" || email === "" || message === "") {
            toast("Please fill all the fields!", {
                type: "error",
                position: "bottom-right",
            });
            return;
        }

        setLoading(true);
        const form = {
            to_name: "Wazir Shehryar",
            user_name: name,
            user_email: email,
            message,
        };
        try {
            const result = await emailjs.send(
                "service_ogy3yvg",
                "template_twxsy6d",
                form,
                "lGp1nHt3Dge19WXHX"
            );
            toast("Email Sent Successfully!", {
                type: "success",
                position: "bottom-right",
            });
            setEmail("");
            setName("");
            setMessage("");
        } catch (error: any) {
            console.log("FAILED...", error.text);
            toast("An error occurred, please try again later!", {
                type: "error",
                position: "bottom-right",
            });
        }

        setLoading(false);
    };
    return (
        <section className="my_section bg-primary2" id="CONTACT">
            <h1>Contact Me</h1>
            <form onSubmit={submit} className="px-4 mx-auto max-w-[600px]">
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="mb-3 block text-base font-medium"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        name="email"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex justify-center w-full mt-6">
                    <button
                        className="bg-[#7731FF] px-6 py-3 rounded-lg shadow-2xl hover:bg-[#7711FF] font-semibold w-full flex justify-center items-center gap-3 disabled:bg-[#7731FF95] disabled:text-[#ffffff95]"
                        disabled={loading}
                    >
                        {loading && <Loader size="20px" />}
                        <p>Submit</p>
                    </button>
                </div>
            </form>
            <ToastContainer />
        </section>
    );
};

export default Contact;
