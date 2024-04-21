import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Upload file");

    // Create a new FormData instance
    const formData = new FormData();

    // Add the name and the file to the FormData instance
    formData.append("cat_name", name);
    formData.append("weight", 5);
    formData.append("owner", 37);
    formData.append("filename", file);
    formData.append("birthdate", "2021-01-01");

    // Send the request
    try {
      const response = await fetch("http://localhost:3333/api/v1/cats/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }

    console.log("File:", file);
    console.log("Name:", name);
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    if (!file) {
      setFile(null);
      setPreviewUrl("");
    }
    setFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        {previewUrl && <img src={previewUrl} alt="Preview" />}
        <input type="file" name="tiedosto" onChange={handleFileChange} />
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
