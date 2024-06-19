import React from "react";
import BookDetail from "./BookDetail.jsx";

const AllBooks = (props) => {
  return (
    <div className="container">
      {props.allBooks.map((ele, i) => (
        <BookDetail
          key={i}
          books={ele}
          OnDelete={props.DeleteBook}
          OneBook={props.selectBook}
        />
      ))}
    </div>
  );
};

export default AllBooks;
