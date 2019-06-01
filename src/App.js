import React, { Component } from 'react';
import 'reset-css';

import Quotes from './components/quotes/quotes';
import Button from './components/button/button';
import Header from './components/header/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: undefined,
      index: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/quotes')
      .then(response => response.json())
      .then(res => {
        if (res && res.data) {
          this.setState(
            {
              quotes: res.data, 
              index: res.data.length - 1
            }
          );
        };
      });
    
    //delay for Header animation 
    setTimeout(() => this.setState({
      isInitiated: true,
    }), 2000);
  }

  handleClick() {
    this.setState({
      index: this.state.index === 0 ? (this.state.quotes.length -1) : (this.state.index -1)
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
          {
            this.state.isInitiated == true && this.state.index !== null && this.state.quotes[this.state.index] !== undefined 
            ? <Quotes quote={this.state.quotes[this.state.index].quote} author={`- ${this.state.quotes[this.state.index].author}`} /> 
            : <div></div>
          } 
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;