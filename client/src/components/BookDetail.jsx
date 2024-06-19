import React from "react";

const BookDetail = (props) => {
  console.log(props);

  const deleteBook = () => {
    props.OnDelete(props.books._id);
  };

  const selectBook = () => {
    props.OneBook(props.books);
  };

  return (
    <div className="item-container">
      <img
        src={props.books.ImageUrl}
        alt={props.books.Name}
        onClick={selectBook}
      />
      <h3>{props.books.Name}</h3>
      <p>categorie: {props.books.categorie}</p>
      <button className="delete-btn" onClick={deleteBook}>
        Delete
      </button>
    </div>
  );
};

export default BookDetail;
