import React, { useState } from "react";
import { questions } from "../../questions";
import SingleQuestion from "../../SingleQuestion";

const Faq = () => {
  const [cards] = useState(questions);
  return (
    <div className=" bg-gray-900 py-20">
      <h1 className="text-center py-20 px-4 bg-gradient-to-l from-green-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Frequently Asked Questions
      </h1>
      <section className="max-w-xl mx-auto py-4 px-4">
        <section className="grid grid-cols-1 gap-2">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="text-center block w-full rounded border border-green-400 px-12 py-3 text-sm font-medium text-white hover:border-violet-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Know More
        </a>
      </div>
    </div>
  );
};

export default Faq;
