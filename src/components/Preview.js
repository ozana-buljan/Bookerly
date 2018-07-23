import React from 'react'

import { Link } from 'react-router-dom'

const Preview = (props) => {
   
    const { book, clearStorage, clearState, onUpdateBook } = props
    
    const { title, shelf, authors, imageLinks, description, language, publishedDate, subtitle, categories } = book
    
    const shelfs = ['currentlyReading', 'wantToRead', 'read', 'none']

    return (
        <div className="book-review">
            <div className="list-books-title">
              
                <Link className="close-search book-review-close" to="/" onClick={() => {clearStorage(); clearState();}}>Close</Link>
            </div>

            <div className="book-review-inner">

                <div
                    className="book-cover book-review-cover"
                    style={{
                        width: 250, height: 350,
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: imageLinks ? `url(${imageLinks.thumbnail})`: null }}>
                </div>
                <div className="book-shelf-changer book-review-changer">
                    <select value={shelf || "none"} onChange={(event) => {
                        onUpdateBook(book, event.target.value)
                    }}>
                        <option value="none" disabled>Move to...</option>
                        {shelfs.map((shelf, index) => <option value={shelf} key={index}>{shelf}</option>)}
                    </select>
                </div>

                { title ? <h2 className="book-review-title">{ title }</h2> : null }

                <ul className="book-review-info">
                    { language ? <li>Language: { language }</li> : null }
                    { publishedDate ? <li>Published: { publishedDate }</li> : null }
                </ul>

                { subtitle ? <h4 className="book-review-sub">{ subtitle }</h4> : null }

                { description ? <p>{ description }</p> : null }

                { authors ? <div>
                    <h2>Authors</h2>
                    <ul className="book-review-author">
                        <li>{authors}</li>
                    </ul>
                </div> : null }

                { categories ? <div>
                    <h2>Categories</h2>
                    <ul className="book-review-cat">
                        <li>{categories}</li>
                    </ul>
                </div> : null }

            </div>
        </div>
    )
}

export default Preview