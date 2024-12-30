import React from "react";

const HeadComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-8">
        <img src="/logo-full.svg" alt="Logo" />
      </div>
      <div>
        <h1 className="text-3xl lg:text-6xl font-bold text-center text-white pt-12">
          Your Journey to Coding{" "}
          <span className="hidden md:inline lg:hidden">
            <br />
          </span>
          Conf{" "}
          <span className="hidden lg:inline">
            <br />
          </span>
          2025 Starts Here!
        </h1>
        <p className="text-2xl font-normal text-center text-cool-gray pt-11">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
    </>
  );
};

export default HeadComponent;
