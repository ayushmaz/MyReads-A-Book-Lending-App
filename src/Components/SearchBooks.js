import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI.js'

class SearchBooks extends Component {

    state = {
        searchedList: []
    }


    onChangeHandle = (e, book) => {
        this.props.onShelfChange(e.target.value, book)
    }

    onInputChange = e => {
        BooksAPI.search(e.target.value.trim())
            .then((book) => {
                ((book) && (book.length > 0) ?
                    this.setState({ searchedList: book }) :
                    this.setState({ searchedList: [] }))
            })

        
    }
    render() {
        
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/"><button className="close-search">Close</button></Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" onChange={this.onInputChange} placeholder="Search by title or author" />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        {/* {console.log(this.state.searchedList)} */}
                            {this.state.searchedList.map((book) => {
                                // {//console.log(this.props.books)}
                                // console.log(book)
                                {const bookInShelf = this.props.books.find(b => book.id === b.id);
                                (bookInShelf === undefined) ? book.shelf = 'none': book.shelf = bookInShelf.shelf
                                }
                                return <li key={book.id}><div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks) && book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select defaultValue={book.shelf} onChange={(evt) => this.onChangeHandle(evt, book)}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{(book.authors) && book.authors}</div>
                                    
                                </div></li>
                            })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBooks;