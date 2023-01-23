import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import './index.css';

const books = [
  {
    id:1,
    author:'Robert C. Martin',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    img: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC._SR360,460.jpg"
  },
  {
    id:2,
    author:'Richard Helm',
    title: 'Design patterns : elements of reusable object-oriented software',
    img: "https://m.media-amazon.com/images/I/71W6DlT1KaL._AC._SR360,460.jpg"
  }
]

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

const Book = ({img, title, author}) => {
  const clickHandler = (e) => {

    console.log(e);
    console.log(e.target);
    alert('hello world');
  }

const complexExample = (author) => {
  console.log(author);
}

  return (
    <article className="book" onMouseOver={() => {
      console.log(title);
    }}>
      <img src = {img} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>  
      <button type="button" onClick={clickHandler}>Reference Example</button>   
      <button type="button" onClick={() => complexExample(author)}>More complex Example</button>   
    </article>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BookList />)