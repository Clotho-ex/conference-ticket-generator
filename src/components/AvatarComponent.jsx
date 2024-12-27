import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const AvatarComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      // File size exceeds 5MB
      setErrorMessage("File too large. Please upload a photo under 5MB");
      setSelectedImage(null);
    } else {
      setErrorMessage(""); // Clear error message
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Set the selected image
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setErrorMessage(""); // Clear error if any
  };

  const changeImage = () => {
    document.getElementById("avatar").click();
  };

  return (
    <>
      <h2 className="text-2xl text-white pt-12 mb-5">Upload Avatar</h2>
      <div
        className="flex items-center justify-center flex-col bg-white bg-opacity-5 outline-dashed outline-Cool-Gray rounded-xl p-4"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}>
        {!selectedImage ? (
          <label
            htmlFor="avatar"
            className="gap-2 px-2 py-2 mt-6 mb-4 bg-white bg-opacity-10 rounded-2xl cursor-pointer">
            <img
              width={55}
              src="src/assets/images/icon-upload.svg"
              alt="Upload Icon"
            />
          </label>
        ) : (
          <img
            src={selectedImage}
            alt="Selected Avatar"
            className="w-24 h-24 rounded-2xl object-cover mb-4"
          />
        )}
        <input
          id="avatar"
          type="file"
          name="avatar"
          accept=".png, .jpg, .jpeg"
          className="hidden"
          onChange={handleImageUpload}
        />
        {!selectedImage ? (
          <p className="text-lg text-French-Grey pb-4">
            Drag and drop or click to upload
          </p>
        ) : (
          <div className="flex gap-4">
            <button
              className="text-white bg-French-Grey bg-opacity-10 px-4 py-2 rounded-lg hover:underline underline-offset-4"
              onClick={removeImage}>
              Remove Image
            </button>
            <button
              className="text-white bg-French-Grey bg-opacity-10 px-4 py-2 rounded-lg hover:underline underline-offset-4"
              onClick={changeImage}>
              Change Image
            </button>
          </div>
        )}
      </div>
      <div className="flex mt-4 items-center">
        <IoIosInformationCircleOutline className="text-white" />
        <p
          className={`text-xs font-light px-2 ${
            errorMessage ? "text-Bittersweet" : "text-white"
          }`}>
          {errorMessage || "Upload your photo (JPG or PNG max size: 5MB)"}
        </p>
      </div>
    </>
  );
};

export default AvatarComponent;
