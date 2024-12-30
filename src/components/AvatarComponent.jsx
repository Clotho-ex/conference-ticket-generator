import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const AvatarComponent = ({ setFormData, formData }) => {
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
      setErrorMessage("File too large. Please upload a photo under 5MB");
      setFormData({ ...formData, avatar: null });
    } else {
      setErrorMessage("");
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, avatar: imageUrl });
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, avatar: null });
    setErrorMessage("");
  };

  const changeImage = () => {
    document.getElementById("avatar").click();
  };

  return (
    <>
      <div className="md:px-spacing-12 lg:px-spacing-12 xl:px-spacing-13 ">
        <h2 className="text-2xl text-white pt-12 mb-5">Upload Avatar</h2>
        <div
          className="flex items-center justify-center flex-col bg-white bg-opacity-5 outline-dashed outline-cool-gray rounded-xl p-4 hover:bg-cool-gray/25"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}>
          {!formData.avatar ? (
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
              src={formData.avatar}
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
          {!formData.avatar ? (
            <p className="text-lg text-french-grey pb-4">
              Drag and drop or click to upload
            </p>
          ) : (
            <div className="flex gap-4">
              <button
                className="text-white bg-french-grey bg-opacity-10 px-4 py-2 rounded-lg hover:underline underline-offset-4"
                onClick={removeImage}>
                Remove Image
              </button>
              <button
                className="text-white bg-french-grey bg-opacity-10 px-4 py-2 rounded-lg hover:underline underline-offset-4"
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
      </div>
    </>
  );
};

export default AvatarComponent;
