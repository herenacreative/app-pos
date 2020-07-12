import React, { Component } from 'react';
// import './styles/Home.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product from '../components/Product'

class Home extends Component {
    constructor(){
        super()
        this.state= {
            products: [
                {id: 1, name: 'Laptop', price: 14000000},
                {id: 2, name: 'Hp', price: 24000000},
                {id: 3, name: 'USB', price: 144000},
                {id: 4, name: 'Keyboard', price: 143000}
            ]
        }
        console.log(constructor)
    }

    goToAbout=()=>{
        this.props.history.push('/about')
    }
    // changeProduct = () =>{
    //     let newProduct = [{
    //         id:2,
    //         name:'Macbook',
    //         price: 20000000
    //     }]
    //     this.setState({
    //         products:newProduct
    //     })
    // }

    // componentDidMount(){
    //     console.log('mount')
    // }

    // componentDidUpdate(){
    //     console.log('update')
    // }

    render(){
        return ( 
            <div>
              <h4 className='title'>Home</h4>
              <NavBar/>
              <ul>
                  {this.state.products.map((dataProduct, index) => {
                      return(
                        // <li key={index}>Product Name : {dataProduct.id} {dataProduct.name} (Rp. {dataProduct.price})</li>
                        <Product key={index} data={dataProduct} username='id'/>
                      )
                  })}
                  {/* <li>Product Name : {this.state.products[0].id} {this.state.products[0].name} (Rp. {this.state.products[0].price})</li> */}
              </ul>
              <button onClick={this.goToAbout}> click </button>
              <Footer/>

              {/* <Switch>
                  <Route path={`${this.props.match.path}/product/:id`}  component={ProductDetail}/>
              </Switch> */}
            </div>
        )
    }
    
}

export default Home;