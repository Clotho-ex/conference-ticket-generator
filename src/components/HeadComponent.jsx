import React from "react";

const HeadComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-8">
        <img src="/src/assets/images/logo-full.svg" alt="Logo" />
      </div>
      <div>
        <h1 className=" text-3xl font-bold text-center text-white pt-12">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="text-2xl font-normal text-center text-Cool-Gray pt-11">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
    </>
  );
};

export default HeadComponent;
