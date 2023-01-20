import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section> 
  );
}

const Book = () => {
  const author = 'Robert C. Martin';
  const title = 'Clean Code: A Handbook of Agile Software Craftsmanship';
  return (
    <article className="book">
      <img src ="https://m.media-amazon.com/images/I/41xShlnTZTL._AC._SR360,460.jpg" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'))