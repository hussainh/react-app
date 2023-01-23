import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import './index.css';

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book)=> {
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section> 
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BookList />)