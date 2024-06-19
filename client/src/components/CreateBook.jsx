import React, { useState } from "react";

const CreateBook = (props) => {
  console.log(props,"test");
  const [Name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [categorie, setCategorie] = useState("");
  const [PageUrl, setPageUrl] = useState("");

  const handleCreate = () => {
    const newBook = { Name, description, ImageUrl, categorie, PageUrl };
    props.add(newBook);
  };

  return (
    <div className="create-container">
      <h1 className="create-title">Let's Create a Story Together</h1>
      <div className="create-box">
        <input
          type="text"
          className="create-input create-name"
          placeholder="Book Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <textarea
          className="create-input create-textArea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="create-input create-category"
          placeholder="Category"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="create-input create-Url"
          placeholder="Image URL"
          value={ImageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="create-input create-Url"
          placeholder="Page URL"
          value={PageUrl}
          onChange={(e) => setPageUrl(e.target.value)}
        />
      </div>
      <div>
        <button className="create-btn" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
