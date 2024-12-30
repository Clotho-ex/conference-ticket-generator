import React, { useState } from "react";

const InputComponent = ({ onSubmit, formData }) => {
  const [fullName, setFullName] = useState(formData.fullName);
  const [email, setEmail] = useState(formData.email);
  const [github, setGithub] = useState(formData.github);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fullName, email, github, avatar: formData.avatar });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:px-spacing-12 lg:px-spacing-12 xl:px-spacing-13">
        <label className="text-white mt-[24px] mb-[12px]" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          name="text"
          id="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="p-[16px] rounded-xl text-white bg-white bg-opacity-10 ring-2 ring-cool-gray"
        />
        <label className="text-white mt-[24px] mb-[12px]" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          className="p-[16px] rounded-xl text-white bg-white bg-opacity-10 ring-2 ring-cool-gray"
        />
        <label className="text-white mt-[24px] mb-[12px]" htmlFor="github">
          GitHub Username
        </label>
        <input
          type="text"
          name="github"
          id="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder="@yourusername"
          className="p-[16px] rounded-xl text-white bg-white bg-opacity-10 ring-2 ring-cool-gray"
        />
        <button
          className="bg-bittersweet text-2xl text-oxford-blue font-extrabold p-[16px] mt-[24px] mb-[60px] rounded-xl hover:brightness-110"
          type="submit">
          Generate My Ticket
        </button>
      </div>
    </form>
  );
};

export default InputComponent;
