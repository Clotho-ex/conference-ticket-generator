import React from "react";
import { FaSquareGithub } from "react-icons/fa6";

const TicketComponent = ({ formData }) => {
  const ticketNumber = `#${Math.floor(10000 + Math.random() * 90000)}`;
  const eventDate = new Date(2025, 0, 31);
  const formattedDate = eventDate.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const [firstName, lastName] = formData.fullName.split(" ");

  return (
    <div className="text-center text-white md:px-spacing-12 lg:px-spacing-12 xl:px-spacing-13">
      {/* Header */}
      <img
        src="/logo-full.svg"
        alt="Logo"
        className="mx-auto pt-8"
      />

      {/* Congratulations Message */}
      <h1 className="text-[2rem] lg:text-5xl xl:text-6xl font-bold pt-12">
        Congrats,{" "}
        <span className="bg-gradient-1 bg-clip-text text-transparent">
          {firstName} {lastName}!{" "}
          <br className="hidden md:inline-block lg:inline-block 2xl:inline-block" />
        </span>
        Your ticket is ready.
      </h1>

      {/* Email Notification */}
      <p className="text-[22px]  pt-12 text-center">
        We've emailed your ticket to <br />
        <span className="text-bittersweet">{formData.email}</span> and will send
        updates in{" "}
        <br className="hidden md:inline-block lg:inline-block xl:inline-block" />
        the run up to the event.
      </p>

      {/* Ticket Card */}
      <div className="flex justify-center mt-20">
        <div
          className="relative bg-ticket-pattern bg-cover bg-center rounded-lg 
            w-[90vw] md:max-w-[600px] aspect-[2/1] p-4 md:p-6"
          style={{
            borderImage: "linear-gradient(90deg, #F37362 0%, #FFF 100%) 1",
          }}>
          {/* Logo and Event Info */}
          <div className="flex justify-between">
            <div>
              <img
                src="/logo-full.svg"
                alt="Logo"
                className="w-24 md:w-48 mb-2 lg:w-60"
              />
              <p className="text-xs ml-4 md:ml-8 md:text-base lg:text-lg 2xl:text-2xl">
                {formattedDate} / Austin, TX
              </p>
            </div>
            <p
              className="text-xl md:text-3xl text-gray-400 transform rotate-90 
              absolute right-6 md:right-12 top-1/2 translate-x-1/2 -translate-y-1/2">
              {ticketNumber}
            </p>
          </div>

          {/* User Info */}
          <div className="flex items-center pt-12 md:pt-24 lg:pt-32 gap-4">
            <img
              src={formData.avatar}
              alt="Avatar"
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl"
            />
            <div>
              <p className="text-lg md:text-xl font-bold text-left">
                {firstName} {lastName}
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                <FaSquareGithub size={16} />
                <span>@{formData.github}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
