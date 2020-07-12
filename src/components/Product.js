import React, {Component} from 'react'
import {Link} from "react-router-dom";

class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
                // isLoading: true,
                id:this.props.data.id,
                name:this.props.data.name,
                price:this.props.data.price
        }       
    }

    // componentDidUpdate(){
    //     console.log('update product')
    // }

    render() {
        console.log('render product')
        return (
            <div>
                <h3><Link to={`/product/${this.state.id}`}>{this.state.id}</Link></h3>
                <h3>{this.state.name}</h3>
                <span>Rp {this.state.price}</span>
            </div>
        )
    };
}

export default Product