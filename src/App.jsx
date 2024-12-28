import React, { useState } from "react";
import HeadComponent from "./components/HeadComponent";
import AvatarComponent from "./components/AvatarComponent";
import InputComponent from "./components/InputComponent";

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
    <>
      <div className="px-4">
        {isSubmitted ? (
          <TicketComponent formData={formData} />
        ) : (
          <>
            <HeadComponent />
            <AvatarComponent />
            <InputComponent />
          </>
        )}
      </div>
    </>
  );
};

export default App;
