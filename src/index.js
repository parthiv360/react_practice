import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css'
// done with css

// files
import {books} from './books'
import Book from './Book';
// end of files


function BookList(){
  return(
    <section className="booklist">
      {books.map((book)=>{
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
      
    </section>
  );
 }

 

ReactDOM.render(
    <BookList/>,
  document.getElementById('root')
);


