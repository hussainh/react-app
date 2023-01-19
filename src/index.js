import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section> 
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <img src ="https://m.media-amazon.com/images/I/41xShlnTZTL._AC._SR360,460.jpg" />

const Title = () => <h1>Clean Code: A Handbook of Agile Software Craftsmanship</h1>

const Author = () => <h1>Robert C. Martin</h1>

ReactDOM.render(<BookList />, document.getElementById('root'))