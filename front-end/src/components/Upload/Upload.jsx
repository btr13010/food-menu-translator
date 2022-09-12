import React from "react";
import "./Upload.css";

const Uploader = (props) => {
  const changeHandler = (event) => {
    props.setSelectedFile(event.target.files[0]);
    props.setIsFilePicked(true);
  };

  const handleSubmission = () => {};

  return (
    <div className="Upload">
      <span className="text">Choose Your Menu Image to be Extracted</span>
      <br />
      <input
        type="file"
        alt="file"
        name="file"
        onChange={changeHandler}
        className="Upload-btn"
      />
    </div>
  );
};

export default Uploader;
