import React, { useEffect, useState } from "react";
import AllBooks from "./AllBooks.jsx";
import axios from "axios";
import OneBook from "./OneBook.jsx";
import CreateBook from "./CreateBook.jsx";

const Main = () => {
  const [books, setBooks] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [book, setBook] = useState(null);
  const [view, setView] = useState("AllBooks");

  const changeView = (view) => {
    setView(view);
  };

  const fetchData = () => {
    axios
      .get("http://127.0.0.1:3000/api/books")
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
        setFilteredBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchBook = (name) => {
    const searched = books.filter((element) =>
      element.Name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredBooks(searched);
  };

  const createBook = (body) => {
    axios
      .post("http://127.0.0.1:3000/api/books/", body)
      .then((response) => {
        console.log(response.data);
        setView("AllBooks");
        setRefetch(!refetch);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBook = (id) => {
    axios
      .delete(`http://127.0.0.1:3000/api/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setRefetch(!refetch);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateBook = (id, body) => {
    axios
      .put(`http://127.0.0.1:3000/api/books/${id}`, body)
      .then((response) => {
        console.log(response.data);
        setRefetch(!refetch);
        changeView("AllBooks");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const selectBook = (book) => {
    setBook(book);
    setView("OneBook");
  };

  const handleSearchTyping = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    searchBook(search);
  };

  useEffect(() => {
    fetchData();
  }, [refetch]);

  const renderView = () => {
    if (view === "AllBooks") {
      return (
        <AllBooks
          allBooks={filteredBooks}
          DeleteBook={deleteBook}
          selectBook={selectBook}
        />
      );
    } else if (view === "OneBook") {
      return <OneBook book={book} />;
    } else if (view === "CreateBook") {
      return <CreateBook add={createBook} />;
    } else if (view === "UpdateBook") {
      return <UpdateBook book={book} update={updateBook} />;
    }
  };

  return (
    <div>
      <div className="nav">
        <h1> It's Story Time ...</h1>
        <button className="All-btn" onClick={() => changeView("AllBooks")}>
          All Stories
        </button>
      </div>
      <div className="Add-Storie">
        <button className="Add-btn" onClick={() => changeView("CreateBook")}>
          Add a Storie
        </button>
      </div>
      <div className="categorie">
        <label className="text-categorie">Choose a categorie </label>
        <select className="input-categorie">
          <option value="for kids under 10">Stories for kids under 10</option>
          <option value="for kids between 10 and 18">
            Stories for Kids between 10 and 18
          </option>
          <option value="for kids +18">Stories for Kids older than 18</option>
        </select>
      </div>
      <div className="header">
        <div className="partOne">
          <h1>
            A room without a book is like <br /> a body without a soul
          </h1>
        </div>
        <div className="partTow">
          <h1>Find your Storie</h1>
          <div className="search">
            <input
              className="input-text"
              type="text"
              placeholder="Please enter your storie name"
              value={search}
              onChange={handleSearchTyping}
            />
            <button className="search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
          <img src="https://images.unsplash.com/photo-1565843248736-8c41e6db117b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBib29rfGVufDB8fDB8fHww" />
        </div>
      </div>
      {renderView()}
    </div>
  );
};

export default Main;
