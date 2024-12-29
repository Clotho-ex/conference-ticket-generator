import React from "react";

const TicketComponent = ({ formData }) => {
  const ticketNumber = `#${Math.floor(10000 + Math.random() * 90000)}`;
  const eventDate = new Date(2025, 0, 31); // 31st Jan 2025
  const formattedDate = eventDate.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="text-center text-white">
        <img
          src="/src/assets/images/logo-full.svg"
          alt="Logo"
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold mt-8">
          Congrats, {formData.fullName}! Your ticket is ready.
        </h1>
        <p className="text-xl mt-4">
          We've emailed your ticket to {formData.email} and will send updates in
          the run up to the event.
        </p>
        <div className="flex justify-center items-center mt-20 text-white">
          <div className="relative bg-ticket-pattern rounded-lg w-[600px] h-[300px] flex flex-col p-6 shadow-xl">
            {/* Logo and Event Info */}
            <div className="flex justify-between">
              <div>
                <img
                  src="/src/assets/images/logo-full.svg"
                  alt="Logo"
                  className="w-30 mb-4"
                />
                <p className="text-[14px] ml-[32px] w-full">
                  {formattedDate} / Austin, TX
                </p>
              </div>
              <p className="text-lg text-gray-400">{ticketNumber}</p>
            </div>
            {/* User Info */}
            <div className="flex items-center mt-8 gap-4">
              <img
                src={formData.avatar}
                alt="Avatar"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-lg font-bold">{formData.fullName}</h2>
                <p className="text-sm text-gray-300 flex items-center">
                  <img
                    src="/src/assets/icons/github.svg"
                    alt="GitHub"
                    className="w-4 h-4 mr-1"
                  />
                  {formData.github}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketComponent;
