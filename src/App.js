import React, { Component } from 'react';
import './App.css';
import Quotes from './components/quotes/quotes'
import Button from './components/button/button'

const quotes = [
  {
      quote: '"quote1"',
      name: 'name1'
  },
  {
      quote: '"quote2"',
      name: 'name2'
  },
  {
      quote: '"quote3"',
      name: 'name3'
  },
  {
      quote: '"It\'s unfortunate that this has happened. No. It\'s fortunate that this has happened and I\'ve remained unharmed."',
      name: 'Marcus Aurelius'
  }
]

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quote: quotes[quotes.length - 1].quote,
      name: quotes[quotes.length - 1].name
    };
    this.handleClick = this.handleClick.bind(this);
  }

  nextQuote() {
    for (let i = 0; i > quotes.length; i--) {
      return quotes[i].quote, quotes[i].name;
    }
  }

  handleClick() {
    this.setState({
      quote: this.nextQuote()
    })
  }

  render() {
    return (
      <div className="App">
        <Quotes quote={this.state.quote} name={this.state.name}/>
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
