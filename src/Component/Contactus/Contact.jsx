import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-gray-900  text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h1 className="text-center py-20 px-4 bg-gradient-to-l from-green-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Contact Us
          </h1>
          <h1 className="dark:text-gray-300 text-center text-gray-700">
            Got a question 💡 for us? Let's talk over an email <br />
            <span className="dark:text-gray-400 py-4 text-gray-800"></span>
          </h1>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/b99ca912-90c7-407d-9170-c06f03667bae"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md dark:text-white text-gray-800 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md dark:text-white text-gray-800 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-green-400 px-12 py-3 text-sm font-medium text-white hover:border-violet-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Let's Talk
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
