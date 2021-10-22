import React from 'react'

function Book(props){
   console.log(props);
   const {img, title, author }= props;
   const clickHandler =() =>{
      alert('hello world');
   }
   return(
     <article className="book" onMouseOver={()=>{
       console.log(title);
     }}>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}> Ex</button>
        
       </article>
   );
 }

export default Book
