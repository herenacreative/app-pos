import React, {Component} from 'react'
import '../styles/NavBar.css'
import {Link} from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <div>
                <h3 className='title'>Nav</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
            </div>
                
        )
    }
}

export default NavBar