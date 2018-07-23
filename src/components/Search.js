import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class Search extends Component {

    state = {
        query: "",
        queryResults: []
    }

    componentDidMount() {
        this.setState({
            queryResults: []
        })
    }

    searchBooks(query) {
        if (query) {
            BooksAPI.search(query, 5).then(
                (results) => {
                    this.setState({
                        query: query,
                        queryResults: ("error" in results) ? [] :
                            results.map((result) => {
                                let index = this.props.books.map((book) => (
                                    book.id
                                )).indexOf(result.id)

                                return index >= 0 ? this.props.books[index] : result
                            })
                    })
                }
            )
        } else {
            this.setState({
                query: "",
                queryResults: [] })
        }
    }

    render() {
        const { queryResults } = this.state
        const { onUpdateBook, preview } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search book-review-menu" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            className='search-books'
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {queryResults.length > 0 && queryResults.map((book) => (
                            <li key={book.id}>
                                <Book
                                    id={book.id}
                                    book={book}
                                    preview={() => {
                                        preview(book.id)
                                    }}
                                    onUpdateBook={onUpdateBook}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search