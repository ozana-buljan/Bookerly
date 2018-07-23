import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Book = props => {
  Book.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };

  const { book, onUpdateBook, preview } = props;

  const { id, shelf, title, authors, imageLinks } = book;

  const shelfs = ["currentlyReading", "wantToRead", "read", "none"];

    /*
    *@description showAuthors()-> checks if there are multiple authors and adds space
    */
  let showAuthors = () => {
    if (book.authors) {
      let length = book.authors.length
      let lastAuthor = book.authors[length-1]
      let authors = book.authors.map((author) => {
        if (author === lastAuthor) {
          return author
        }
        else {
          // Seperate authors by comma
          return author + ", "
        }
      })
      return authors
    }
    else {
      // if there are no authors, return Unknown
      return "Unknown"
    }
  }
  return (
    <div className="book" id={id} key={id}>
      <div className="book-top">
        <Link to="/preview">
          <div
            className="book-cover"
            onClick={() => {
              preview(book.id);
            }}
            style={{
              width: 128,
              height: 193,
              backgroundImage: imageLinks
                ? `url(${imageLinks.thumbnail})`
                : null
            }}
          />
        </Link>
        <div className="book-shelf-changer">
          <select
            value={shelf || "none"}
            onChange={event => {
              onUpdateBook(book, event.target.value);
            }}
          >

            {shelfs.map((shelf, index) => (
              <option value={shelf} key={index}>

                {shelf
                  .replace(/([A-Z])/g, " $1")
                  .trim()
                  .toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="book-title">
        <h2> {title} </h2>
      </div>
      <div className="book-authors"> {showAuthors()} </div>
    </div>
  );
};

export default Book;
