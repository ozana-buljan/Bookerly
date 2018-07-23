# Udacity FEND Project #7:  **Bookerly** - Reads Tracking App

A books library app created with React. Purpose of the app is to keep your reads in check; by adding them to one of three shelves:
* Currently reading
* Want to read
* Read

Well, technicaly. Thing is, app is using already compiled database and at this moment it doesn't have a function to import new books. So better hope your books are on our list! Look them up with the search function.

In all seriousnes, though, the point of this app was for me to practice my React skills. It's an okay base what I did here, but I plan to grow it as my skills grow too.

## Running instructions

### Web live
Visit:

### Run locally
*   Download the repository: click download ZIP on the right of the screen and extract the zip file to your computer or clone the repository using Git.
*   Navigate to where you unzipped the file or cloned the repository.
*  In terminal, navigate to this folder
        1. install all project dependencies with `npm install`
        2. run the project on your local server with `npm start`

* With your server running, in your browser, navigate to the site: `http://localhost:3000`

* Check out the app!


## File structure

As  previously stated, the point was to practice React, while still creating something fun and useful(-ish?). Well, we were provided with the starter template with a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. Our job was to add interactivity to the app by refactoring the static code in the template. I changed the file structure a bit (to make it less all over the place).

Below is file structure of the app

```bash
BOOKERLY
├── README.md  # This file
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── LICENSE.md # MIT license for the project
├── package.json # npm package manager file.
├──node_modules # file installed and provided with Create React App.
├── public
│   ├── favicon.ico # App Icon
│   └── index.html
│   └── landing-hero.jpg
│   └── landing-hero-mobile.jpg
│   └── logo.png
└── src
    ├── Componenents # All React components for this app are in this directory
    │     ├── Parallax.js # Element with Parallax effect
    │     ├── Shelf.js # Contents of landing page: Header, booksheves and books
    │     ├── Book.js # Individual books
    │     ├── Preview.js # Book preview page -> details for each book
    │     ├── Search.js # Search page: input field + results
    │     └── Footer.js # Sticky footer
    ├── Styles # All React components for this app are in this directory
    │     ├── App.css # Styles for the app
    │     ├── index.css # Global styles
    ├── App.js # The root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Utils
    │     └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # images for the app
    │     ├── add.svg
    │     ├── arrow-back.svg
    │     └── arrow-drop-down.svg
    └── index.js # This file is used for DOM rendering only.
```

## App Functionality

* In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books:
    - Currently Reading
    - Want to Read
    - Read

* Each book has a control that lets user to select the shelf for that book. When selection changes, the book moves onto selected shelf. The default value for the control is the current shelf the book is on.

* The main page also has a link to search page, which allows user to find books and add to their library.

* The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets user add the book to the library.

* When a book is on a bookshelf, it has the same state on both the main application page and the search page.

* The search page also has a link to / (the root URL), which leads back to the main page.

* When navigating back to the main page from the search page, user instantly sees all of the selections they made on the search page in the library.

## Backend Server NB

To simplify the development process, we've been provided with a backend server to develop against. The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend!

## The looks
The basic look for the app was already provided. However, I've done some (minimal) redesign. Check it out!

![Bookerly UI Desktop](https://raw.githubusercontent.com/ozana-buljan/Bookerly/master/public/Bookerly-UI-Desktop.png)

![Bookerly UI Mobile](https://raw.githubusercontent.com/ozana-buljan/Bookerly/master/public/Bookerly-UI-Mobile.png)

## ToDo
Simple ones that should enhance UX:
* Add "Rate a book" functionality
* Filter books by rating
* Bulk move books from one shelf to another

Not so simple ones (but hey, let's think big):
* Add new books to the database
* User's profile (similar to Goodreads)

## Contributing
If you'd like to play with my code, contribute or suggest how to improve it - I'd welcome any feedback!

I'd love to collaborate so any of the todos I'd gladly include. There are only two requirements I have to for the push request to be accepted:
- code improves app experience
- code is working!

Thank you in advance if you decide to tackle with this one!

## References
*   Original repo: [Starter Code for the React MyReads Project by Udacity](https://github.com/udacity/reactnd-project-myreads-starter)

## Author
* [**Ozana Buljan**](https://github.com/ozana-buljan)
* *Initial work* - [Udacity](https://github.com/udacity/reactnd-project-myreads-starter)


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
Thanks to Udacity, my mentor and my classmates for this opportunity and all the support!
