import React, { Component } from 'react';
import './App.css';
import Quotes from './components/quotes/quotes';
import Button from './components/button/button';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';

const quotes = [
  {
    quote: '"I\'m not the strongest. I\'m not the fastest. But I\'m really good at suffering."',
    name: 'Amelia Boone'
  },
  {
    quote: '"It\'s unfortunate that this has happened. No. It\'s fortunate that this has happened and I\'ve remained unharmed."',
    name: 'Marcus Aurelius'
  },
  {
    quote: '"...there\'s only one really good question, which is, \'What am I unwilling to feel?\'"',
    name: 'Tara Brach'
  },
  {
    quote: '"You must want to be a butterfly so badly, you are willing to give up being a caterpillar."',
    name: 'Sekou Andrews'
  },
  {
    quote: '"Learn the rules like a pro, so you can break them like an artist."',
    name: 'Pablo Picasso'
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: quotes.length - 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.index === 0) {
      this.setState({
        index: quotes.length - 1
      })
    } else {
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Quotes quote={quotes[this.state.index].quote} name={'- ' + quotes[this.state.index].name} />
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
