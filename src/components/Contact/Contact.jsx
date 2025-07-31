import React, { useRef, useState } from "react";
import { RxRocket } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_lu26m17",
        "template_0pq9ihz",
        form.current,
        "1fUGboxoEk715gn9R"
      )
      .then(
        () => {
          setSending(false);
          toast.success("✅ Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.current.reset(); // ✅ Reset form after success
        },
        (error) => {
          setSending(false);
          toast.error(
            `❌ Failed to send message. Error: ${
              error.text || "Unknown error"
            }`,
            {
              position: "top-right",
              autoClose: 7000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto mt-16 md:mt-16 px-4  mb-16"
    >
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Section Header */}
      <header className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Contact Me
        </h1>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
        <p
          className="text-gray-300 mt-6 text-lg font-medium"
          data-aos="fade-up"
        >
          I’d love to hear from you! Whether it’s a question, collaboration, or
          just a hello.
        </p>
      </header>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-[#1e293b] p-8 rounded-xl shadow-lg border border-gray-700"
        data-aos="fade-up"
      >
        {/* Form Title */}
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2 mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Let's Connect <RxRocket className="text-purple-300 animate-pulse" />
        </h2>

        {/* Name Field */}
        <div className="mb-6">
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition"
          />
        </div>

        {/* Subject Field */}
        <div className="mb-6">
          <input
            type="text"
            name="subject"
            id="subject"
            required
            placeholder="Subject"
            className="w-full px-4 py-2 rounded-lg bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            placeholder="Type your message here..."
            className="w-full px-4 py-2 rounded-lg bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={sending}
          className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold tracking-wide hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
        >
          {sending ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
