import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';

const firstBook = {
  author:'Robert C. Martin',
  title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
  img: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC._SR360,460.jpg"
}

const secondBook = {
  author:'Richard Helm',
  title: 'Design patterns : elements of reusable object-oriented software',
  img: "https://m.media-amazon.com/images/I/71W6DlT1KaL._AC._SR360,460.jpg"
}

function BookList() {
  return (
    <section className="booklist">
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author} 
      />
      <Book 
        img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author} 
      />
    </section> 
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src = {props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>      
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'))