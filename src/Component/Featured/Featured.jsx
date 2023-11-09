import React from "react";

const Featured = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Featured by the world’s most innovative teams
        </h1>

        <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://framerusercontent.com/images/Q3pMxGeBV8FQp5C2rwaKNeUGwUw.png?scale-down-to=512"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://framerusercontent.com/images/ZNZTLRKIIbkVVhoCsSBl2HE88EI.png"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://framerusercontent.com/images/8t9x7wNKAVi3ec6QxrtkLDlB4I.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://framerusercontent.com/images/v9XnAmIV9YPyiM3w7k5hzoD6ScY.png?scale-down-to=512"
            alt="SavvyCal"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
