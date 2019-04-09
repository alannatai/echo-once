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
      index: quotes.length -1
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      index: this.state.index - 1
    })
  }

  render() {
    return (
      <div className="App">
        <Quotes quote={quotes[this.state.index].quote} name={'- ' + quotes[this.state.index].name}/>
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
