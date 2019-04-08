import React, { Component } from 'react';
import './quotes.css';

window.addEventListener("load", function () {
    var nodes = document.querySelectorAll(".overlay");
    for (var i = 0; i < nodes.length; i++) {
        var words = nodes[i].innerText;
        var html = "";
        for (var i2 = 0; i2 < words.length; i2++) {
            if (words[i2] == " ") html +=
                words[i2];
            else html +=
                "<span>" + words[i2] + "</span>"
        }
        nodes[i].innerHTML = html;
    }
});

class Quotes extends Component {
    render() {
        return (
            <div>
                <h1 className="overlay">{this.props.quote}</h1>
                <h2 className="highlight">{this.props.name}</h2>
            </div>
        )
    }
}

export default Quotes;