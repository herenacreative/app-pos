import React, {Component} from 'react'
// import '../styles/About.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

class About extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <h3 className='title'>hhhAbout</h3>
                <Footer/>
            </div>
        )
    }
}

export default About