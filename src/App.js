import React, { Component } from 'react';
import 'reset-css';
import axios from 'axios';

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
    axios.get('http://localhost:4000/quotes')
    .then(res => {
      if (res && res.data.quotes) {
        this.setState(
          {
            quotes: res.data.quotes,
            index: res.data.quotes.length - 1
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
      index: this.state.index === 0 ? (this.state.quotes.length - 1) : (this.state.index - 1)
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