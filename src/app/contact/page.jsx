"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current === null) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_pcn4p1x",
        "template_g2fjuph",
        form.current,
        "3j0zijYHIt7_296uh"
      )
      .then(
        (result) => {
          if (result.status === 200 || result.text === "OK") {
            toast.success("Success Send Message 🚀");
            form.current?.reset();
            setIsSubmitting(false);
          }
        },
        (error) => {
          toast.error(`${error.text}😭`);
          setIsSubmitting(false);
        }
      );
  };

  const text = "Hai, I'm Cecep";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl md:text-5xl">
          <div className="">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-1/2 mt-6 lg:mt-0 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center px-20 md:px-24 py-72 lg:py-24"
        >
          <span className="">Dear Cecep,</span>
          <textarea
            name="message"
            rows={6}
            className="bg-transparent py-4 border-b-2 border-b-black outline-none resize-none"
          ></textarea>
          <span className="">My name is:</span>
          <input
            name="name"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span className="">My email addres is:</span>
          <input
            name="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button
            disabled={isSubmitting}
            className="bg-purple-200 rounded disabled:cursor-not-allowed font-semibold text-gray-600 hover:bg-blue-400 px-4 py-2"
          >
            Send
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            closeOnClick
            pauseOnHover
            transition={Bounce}
            theme="colored"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
