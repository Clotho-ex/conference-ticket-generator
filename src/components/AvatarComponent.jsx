import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const AvatarComponent = () => {
  return (
    <>
      <h2 className="text-2xl text-white pt-12 mb-5">Upload Avatar</h2>
      <div className="flex items-center justify-center flex-col bg-white bg-opacity-5 outline-dashed outline-Cool-Gray rounded-xl">
        <label
          htmlFor="avatar"
          className="gap-2 px-2 py-2 mt-6 mb-4 bg-white bg-opacity-10 rounded-2xl">
          <img
            width={55}
            src="src/assets/images/icon-upload.svg"
            alt="Upload Icon"
          />
        </label>
        <input
          id="avatar"
          type="file"
          name="avatar"
          accept=".png, .jpg, .jpeg"
          className="hidden"
        />
        <p className="text-lg text-French-Grey pb-4">
          Drag and drop or click to upload
        </p>
      </div>
      <div className="flex mt-4 items-center">
        <IoIosInformationCircleOutline className="text-white" />
        <p className="text-xs font-light text-white px-2">
          Upload your photo (JPG or PNG max size: 500kb)
        </p>
      </div>
    </>
  );
};

export default AvatarComponent;
