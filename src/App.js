import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

// need unique key to help react find stuff faster. 

function Houses({
  houses,
}) {
  return (
    <div>
      {houses.map(house => <div key={house.name}>{house.name}</div>)}
    </div>
  )
}

function House ({
  name,
}) {
  return <div key={name}>{name}</div>
}

class App extends Component {
  constructor() { // used to define private variables just for that class you're using
    super(); // used to call a function's parents. if we want to have access to component's state by extending it, we need it. 
    this.state = {
      houses: [],
    }

  }

  componentDidMount() {
    $.get('http://www.anapioficeandfire.com/api/houses').then(response => {
      console.log(response);
      this.setState({
        houses: response,
      })
    })
  }

  render() {

    return (
      <div className="App">
        <Houses  houses={this.state.houses}/> 
      </div>
    );
  }
}

export default App;

// Exports are taking whatever's in that file to pull it into another file.
// If you default export something, when you import it, you can name it whatever you want.
// If you did a named export (without default), you have to use the same name when you import.
