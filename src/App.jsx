import React from "react";
import HeadComponent from "./components/HeadComponent";
import AvatarComponent from "./components/AvatarComponent";
import InputComponent from "./components/InputComponent";

const App = () => {
  return (
    <>
      <div className="px-4">
        <HeadComponent />
        <AvatarComponent />
        <InputComponent />
      </div>
    </>
  );
};

export default App;
