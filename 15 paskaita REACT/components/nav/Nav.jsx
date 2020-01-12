import React, { Component } from "react";
import styles from "./nav.scss";

class Nav extends Component{
    render(){
        return(
            <div className="navigation">
                <ul>
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">Link3</a></li>
                    <li><a href="#">Link4</a></li>
                    <li><a href="#">Link5</a></li>
                </ul>
            </div>
        );
    }
}

export default Nav;