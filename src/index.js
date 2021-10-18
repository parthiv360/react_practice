import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css'
// done with css
function BookList(){
  return(
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
 }

 function Book(){
   return(
     <article className="book">
       <Image/>
       <Title/>
       <Author/>
       </article>
   );
 }

 function Image(){
   return(
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAghpr-fedxLyE0f5bh41MoSISQzscp3mQMw&usqp=CAU" alt="" />
   );
 }

 const Title = () =>{
   return(
     <h1>The Library Book</h1>
   );
 }
 const Author = () =>{
   return(
     <h4 style={{ color: '#617d98', fontSize:'0.95rem', marginTop:'0.25rem'}}>Susan Orlean</h4>
   );
 }

ReactDOM.render(
    <BookList/>,
  document.getElementById('root')
);


