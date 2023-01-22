import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';

const books = [
  {
    author:'Robert C. Martin',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    img: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC._SR360,460.jpg"
  },
  {
    author:'Richard Helm',
    title: 'Design patterns : elements of reusable object-oriented software',
    img: "https://m.media-amazon.com/images/I/71W6DlT1KaL._AC._SR360,460.jpg"
  }
]

function BookList() {
  return (
    <section className="booklist">
      {books.map((book)=> {
        const {img, title, author} = book;
        return (
          <Book book={book}></Book>
        );
      })}
    </section> 
  );
}

const Book = (props) => {
  const {img, title, author} = props.book;
  return (
    <article className="book">
      <img src = {img} />
      <h1>{title}</h1>
      <h4>{author}</h4>     
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'))