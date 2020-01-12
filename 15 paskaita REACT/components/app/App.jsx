import React, { Component } from "react";
import styles from "./App.scss";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

class App extends Component {
    render() {
        return(
            <div className="container">
                <Header/>
                <Nav/>
                <Main/>
                <Footer/>


            </div>

        )
    }
}

export default  App;