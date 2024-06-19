import React, { useState } from "react";

const UpdateBook = (props) => {
  const [Name, setName] = useState(props.book.Name);
  const [description, setDescription] = useState(props.book.description);
  const [ImageUrl, setImageUrl] = useState(props.book.ImageUrl);
  const [categorie, setCategorie] = useState(props.book.categorie);
  const [PageUrl, setPageUrl] = useState(props.book.PageUrl);

  const handleUpdate = () => {
    const updatedBook = {
      Name,
      description,
      ImageUrl,
      categorie,
      PageUrl,
    };
    props.update(props.book._id, updatedBook);
  };

  return (
    <div className="create-container">
      <h2 className="create-title">Update Book</h2>
      <div className="create-box">
        <div>
          <h2>Name:</h2>
          <input
            type="text"
            className="create-input"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h2>Description:</h2>
          <textarea
            className="create-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <h2>Image URL:</h2>
          <input
            type="text"
            className="create-input"
            value={ImageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <h2>Category:</h2>
          <input
            type="text"
            className="create-input"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          />
        </div>
        <div>
          <h2>Page URL:</h2>
          <input
            type="text"
            className="create-input"
            value={PageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
          />
        </div>
        <button className="create-btn" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default UpdateBook;
