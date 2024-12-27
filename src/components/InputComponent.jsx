import React from "react";

const InputComponent = () => {
  return (
    <>
      <div className="flex flex-col">
        <label className="text-white mt-[24px] mb-[12px]">Full Name</label>
        <input
          type="text"
          name="text"
          id="name"
          className="p-[16px] rounded-xl bg-white bg-opacity-10 ring-2 ring-Cool-Gray"
        />
        <label className="text-white mt-[24px] mb-[12px]">Email Adress</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          className="p-[16px] rounded-xl bg-white bg-opacity-10 ring-2 ring-Cool-Gray"
        />
        <label className="text-white mt-[24px] mb-[12px]">
          GitHub Username
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="@yourusername"
          className="p-[16px] rounded-xl bg-white bg-opacity-10 ring-2 ring-Cool-Gray"
        />
        <button
          className="bg-Bittersweet text-2xl text-Oxford-Blue font-extrabold p-[16px] mt-[24px] mb-[60px] rounded-xl"
          type="submit">
          Generate My Ticket
        </button>
      </div>
    </>
  );
};

export default InputComponent;
