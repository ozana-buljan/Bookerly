import React, { Component } from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Book from "./Book";

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };

  render() {
    const { books, onUpdateBook, preview } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <div className="logo">
            <a href="/">
              <img
                src={
                  "http://res.cloudinary.com/duc8x03hq/image/upload/v1532356177/logo_efps7r.png"
                }
                alt="logo"
                className="logo-img"
              />
            </a>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
        <div className="list-books-content">
          <div>
            {["currentlyReading", "wantToRead", "read"].map(shelf => (
              <div className="bookshelf" key={shelf}>
                <h2 className="bookshelf-title">
                  {// Inserting space before capital letters in the bookshelf title source:
                  // https://stackoverflow.com/questions/5582228/insert-space-before-capital-letters
                  shelf
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .toUpperCase()}
                </h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.length > 0 &&
                      books.filter(book => book.shelf === shelf).map(book => (
                        <li key={book.id}>
                          <Book
                            id={book.id}
                            book={book}
                            onUpdateBook={onUpdateBook}
                            preview={preview}
                          />
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
