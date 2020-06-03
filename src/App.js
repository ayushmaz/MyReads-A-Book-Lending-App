import React from 'react'
import './App.css'
import './Components/SearchBooks'
import SearchBooks from './Components/SearchBooks'
import ListBooks from './Components/ListBooks'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }


  componentDidMount(){
    BooksAPI.getAll()
    .then((book)=>{
      this.setState({
        books : book
      })
    })
  }


  onShelfChange = (shelf, book) => { 
    //console.log(book.shelf + " " + shelf)
    book.shelf = shelf
    if(this.state.books.indexOf(book) < 0){
      this.state.books.push(book)
    }
    BooksAPI.update(book , shelf)
    .then(()=>{
      this.setState((currState) => ({
        books : currState.books.map((b) => b.id === book.id ? book : b)
      }))
    })
    
  }


  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path="/" render={() => {
          return <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">

                      <ListBooks onShelfChange={this.onShelfChange} bookList={this.state.books.filter((book)=> book.shelf === 'currentlyReading')} />

                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        <ListBooks onShelfChange={this.onShelfChange} bookList={this.state.books.filter((book)=> book.shelf === 'wantToRead')} />
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        <ListBooks onShelfChange={this.onShelfChange} bookList={this.state.books.filter((book)=> book.shelf === 'read')} />
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'><button >Add a book</button></Link>
              </div>
            </div>
          </div>
        }} />
        <Route exact path='/search' render={({ history }) => <SearchBooks books= {this.state.books} onShelfChange={this.onShelfChange} />} />
      </div>
    )
  }
}

export default BooksApp
