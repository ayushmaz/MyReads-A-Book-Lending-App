import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI.js'

class SearchBooks extends Component {

    state = {
        query : "",
        searchedList : []
    }

    componentDidMount(){
        console.log("running")
        BooksAPI.search("ART")
        .then((book)=>{
            console.log(book)
            this.setState({
                searchedList : book
            })
        })
    }

   /* onInputChange = e => {
        //console.log(e.target.value)
        this.setState({
            query : e.target.value
        })
    }*/
    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/"><button className="close-search">Close</button></Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" onChange = {this.onInputChange} placeholder="Search by title or author" />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {
                                this.state.searchedList.map((book)=>{
                                return <li>{book.title}</li>
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