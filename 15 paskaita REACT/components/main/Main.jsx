import React, { Component } from "react";
import styles from '../main/main.scss';
import Book from "../book/book";
import booksData from "../data/sarasas";


class Main extends Component{
    render(){
        const Booklist = booksData.map(book =>
            <Book
                stock = {book.stock}
                title = {book.title}
                description = {book.desc}
                link = {book.link}/>)
        return(
          <main>
              <h2>Knygu sarasas</h2>
              {Booklist}

          </main>
        );
    }


}

console.log(booksData);

export default Main;