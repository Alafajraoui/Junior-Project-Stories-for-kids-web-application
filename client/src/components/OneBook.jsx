import React from "react";

const OneBook = ({ book }) => {
  return (
    <div className="item-container">
      <img src={book.ImageUrl} />
      <h1>{book.Name}</h1>
      <br></br>
      <h2> {book.description}</h2>
      <br></br>
      <h3>categorie: {book.categorie}</h3>
       <a href={book.PageUrl}><button className="Read-bnt" >
        Start Reading
      </button></a>
      <button className="update-btn" > Update </button>
    </div>
  );
};

export default OneBook;


//{<a href={book.PageUrl}></a>}
