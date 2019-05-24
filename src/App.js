import React, { Component } from 'react';
import 'reset-css';
import Quotes from './components/quotes/quotes';
import Button from './components/button/button';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';

//let quotes = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: '"Learn the rules like a pro, so you can break them like an artist."',
          name: 'Pablo Picasso'
        }
      ],
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
              quotes: [...this.state.quotes, ...res.data], 
              index: this.state.quotes.length - 1
            }
          );
        };
      });

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
        <NavBar />
        <Header />
        {this.state.isInitiated && <Quotes quote={this.state.quotes[this.state.index].quote} name={`- ${this.state.quotes[this.state.index].name}`} />} 
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
