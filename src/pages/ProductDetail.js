import React, {Component} from 'react'

class ProductDetail extends Component{
    constructor(props){
        super(props)   
        console.log(this.props)    
    }


    render() {
        console.log('render ProductDetail')
        return (
            <div>
               sada # {this.props.match.productId}
            </div>
        )
    };
}

export default ProductDetail