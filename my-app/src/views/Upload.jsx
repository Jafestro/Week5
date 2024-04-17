import React, { useState } from "react";
import PropTypes from "prop-types";

const Upload = (props) => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Upload file");

    console.log("File:", file);
    console.log("Name:", name);
  };
  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="tiedosto"
          onChange={(event) => setFile(event.target.value)}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
        <button className={"bg-amber-200 hover: bg-green-500"} type="submit">
          Upload File
        </button>
      </form>
    </>
  );
};

Upload.propTypes = {};

export default Upload;
