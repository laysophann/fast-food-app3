import { Component } from "react";
import "./App.css";
import Content from "./Components/Content";
import NavMenu from "./Components/NavMenu";

class App extends Component {
  constructor(){
    super()
    this.state = {
      data : [
        {
          id : 1, 
          img : '/images/pizza1.jpg',
          title : 'Pizza', 
          amount : 0, 
          total : 0,
          price : 15
        },
        {
          id : 2, 
          img : '/images/pizza2.jpg',
          title : 'Chicken', 
          amount : 0, 
          total : 0,
          price : 5
        },
        {
          id : 3, 
          img : '/images/pizza3.jpg',
          title : 'Hamburger', 
          amount : 0, 
          total : 0,
          price : 6
        },
        {
          id : 4, 
          img : '/images/pizza4.jpg',
          title : 'Cola', 
          amount : 0, 
          total : 0,
          price : 2
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <NavMenu />
        <Content data={this.state.data}/>
      </div>
    );
  }
}
export default App;
