import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section> 
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <img src ="#" />

const Title = () => <h1>Title of the book</h1>

const Author = () => <h1>Autho Name</h1>

ReactDOM.render(<BookList />, document.getElementById('root'))