import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/Menu/Menu'
import { Dishes } from './mockData/dishes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: Dishes,
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    )
  }
}

export default App
