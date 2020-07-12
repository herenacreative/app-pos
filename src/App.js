import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductDetail from './pages/ProductDetail';

function App() {
    return ( 
      <Router>
        <Switch>
        <Route path='/' component={Home}/>
          <Route path='/product/:id' component={ProductDetail}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    );
}

export default App;