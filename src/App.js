import React from 'react'
import './App.css'
import './Components/SearchBooks'
import SearchBooks from './Components/SearchBooks'
import ListBooks from './Components/ListBooks'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'

class BooksApp extends React.Component {
  state = {
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
    book.shelf = shelf
    BooksAPI.update(book , shelf)
    .then(()=>{
      this.setState((currState) => ({
        books : (!this.state.books.some(entry=> entry.id === book.id))?currState.books.concat([book]).map((b) => b.id === book.id ? book : b):
        currState.books.map((b) => b.id === book.id ? book : b)
      }))
    })
    
  }


  render() {
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
