// react
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

// api
import * as BooksAPI from './utils/BooksAPI'

// components
import Shelf from './components/Shelf'
import Search from './components/Search'
import Preview from './components/Preview'
import Parallax from './components/Parallax.js'
import Footer from './components/Footer'

// styles
import './styles/App.css'

/**
 * @description
 */
class App extends Component {
    /**
     *
     * @type {{books: Array}}
     */
    state = {
        book : JSON.parse(localStorage.getItem('preview')) || [],
        books: []
    }

    /**
     * @description sets the books state after the components are rendered
     */
    componentDidMount() {
        BooksAPI
            .getAll()
            .then((books) => {
                this.setState({
                    books: books.filter((book) => (book.shelf && book.shelf !== "none"))
                })
            })
    }

    /**
     * @description handles moving a book from one shelf to an other shelf
     * @param book
     * @param shelf
     */
    updateBookHandler = (book, shelf) => {
        BooksAPI
            .update(book, shelf)
            .then(() => {
                // add shelf to book
                book.shelf = shelf

                // set state
                this.setState((state) => ({
                    books: state
                        .books
                        .filter((b) => (b.id !== book.id))
                        .concat(
                            shelf !== "none"
                                ? [book]
                                : []
                        )
                }))
            })
    }

    /**
     * @description passes the book information to the review component
     * @param book
     */
    previewBookHandler = (book) => {
        BooksAPI
            .get(book)
            .then(res => {
                this.setState({
                    book: res
                }, () => localStorage.setItem('preview', JSON.stringify(res)))
                console.log(this.state.book)
            })
    }

    /**
     * @description clear localStorage when navigating aways from preview
     */
    clearStorageHandler = () => {
        localStorage.clear()
    }

    /**
     * @description clear the book state
     */
    clearStateHandler = () => {
        this.setState({book: []})
    }

    /**
     * @description renders the app and handles routing
     * @returns {*}
     */
    render() {
        return (< div className = "app" > <Route exact path = "/" render = {
            () => (
                <div>
                    <Parallax/>
                    <Shelf
                        books={this.state.books
}
                        onUpdateBook={this.updateBookHandler
}
                        preview={this.previewBookHandler
}/>
                </div>
            )
        } /> <Route path = "/search" render = {
            () => (< Search books = {
                this.state.books
            }
            onUpdateBook = {
                this.updateBookHandler
            }
            preview = {
                this.previewBookHandler
            } />)
        } /> <Route path = "/preview" render = {
            () => (< Preview book = {
                this.state.book
            }
            onUpdateBook = {
                this.updateBookHandler
            }
            clearStorage = {
                this.clearStorageHandler
            }
            clearState = {
                this.clearStateHandler
            } />)
        } /> <Footer/>
    </div>)
    }
}

export default App
