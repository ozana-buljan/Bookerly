/* *** *** REACT *** *** */
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

/* *** *** API *** *** */
import * as BooksAPI from './utils/BooksAPI'

/* *** *** COMPONENTS *** *** */
import Shelf from './components/Shelf'
import Search from './components/Search'
import Preview from './components/Preview'
import Parallax from './components/Parallax.js'
import Footer from './components/Footer'

/* *** *** STYLES *** *** */
import './styles/App.css'

/* *** *** App Component *** *** */

/**
 * @description App -> contains all components, handles routing and renders the views
 */
class App extends Component {
    /*
     * @type {{books: Array}}
     */
    state = {
        book : JSON.parse(localStorage.getItem('preview')) || [],
        books: []
    }

    /*
     * @description -> after the components are rendered, set the book state
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

    /*
     * @description updateBookHandler -> handles how to move a book from one shelf to another
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

    /*
     * @description previewBookHandler -> passes information about the book to the review component
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

    /*
     * @description clearStorageHandler -> clear localStorage when navigating away from preview
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

    /*
     * @description render() -> renders the app and handles routing
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
