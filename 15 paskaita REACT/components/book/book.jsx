import React, { Component } from 'react';
import style from '../book/book.scss'

    function Book (props){
        return (
            <div className="knyga">
                <h3><span>Stock:  </span>{props.stock}</h3>
                <p>{props.title}</p>
                <p>{props.description}</p>
                <a href="">{props.link}</a>
            </div>


        )
    }

export default Book;