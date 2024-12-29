import React, { useState } from "react";
import HeadComponent from "./components/HeadComponent";
import AvatarComponent from "./components/AvatarComponent";
import InputComponent from "./components/InputComponent";
import TicketComponent from "./components/TicketComponent";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    github: "",
    avatar: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  return (
    <div className="px-4">
      {isSubmitted ? (
        <TicketComponent formData={formData} />
      ) : (
        <>
          <HeadComponent />
          <AvatarComponent setFormData={setFormData} formData={formData} />
          <InputComponent onSubmit={handleFormSubmit} formData={formData} />
        </>
      )}
    </div>
  );
};

export default App;
