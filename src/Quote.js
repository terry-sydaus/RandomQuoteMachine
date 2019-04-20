// Quote.js
import React, { Component } from 'react';
import QuoteContent from './QuoteContent';


class Quote extends Component {
state = {
  quote: '', 
  author: '',
  fetchedQuotes: [],
  colors: ['#326378', '#57acf8', '#41ac88', '#6acc3a', '#a63478', '#8cc668', '#9712a7', '#e9ae68', 
	    '#358cd5', '#779a4a', '#e42258', '#c2b178', '#6d4ed8', '#9b7f37', '#ca7778', '#4ece88',
	    '#ac1318', '#e68a68'],
  color: ''
}

componentDidMount () {
  this.updateQuote();
}

updateQuote = () => {
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => this.storeQuotes(data))
    .catch(error => console.log(error));
}

storeQuotes = data => {
  this.setState({
    fetchedQuotes: data.quotes
  });
  this.newQuote();
}

newQuote = () => {
  let i = Math.round(Math.random() * (this.state.fetchedQuotes.length - 1));
  //console.log(i);
  //const randomColor =  '#' + Math.random().toString(16).substr(-6);
  //console.log(randomColor);
  let j = Math.round(Math.random() * (this.state.colors.length - 1));
  document.body.style.background = this.state.colors[j];
  this.setState({
    quote: this.state.fetchedQuotes[i].quote,
    author: this.state.fetchedQuotes[i].author,
    color: this.state.colors[j]
  });
}

render() {
  let style = {
    color: this.state.color,
    transitionProperty: 'color',
    transitionDuration: '3s'
  };
  let style1 = {
    backgroundColor: this.state.color,
    color: 'white',
    transitionProperty: 'background-color',
    transitionDuration: '3s',
    //height: '35px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    padding: '0.7rem 1.2rem'
  }

  return (
    <div style={style} className='quotebox'>
      <div className='quotetxt'>
	<i className='fas fa-quote-left'></i>
	<QuoteContent id='text' class='quotetext' value={this.state.quote} />
      </div>
      <div className='authorbox'>
	<QuoteContent id='author' class='quoteauthor' value={'- ' + this.state.author} />
      </div>
      <div className='buttons'>
	<button 
	  style={style1}
	  id='new-quote' 
	  onClick={this.newQuote}>New Quote
	</button>
	<a 
	  target='_blank' 
	  rel='noopener noreferrer'
	  href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${this.state.quote}" - ${this.state.author}`}
	  id='tweet-quote'
	  title='Tweet this quote!'>
	  <i 
	    className='fab fa-twitter'
	    style={style}>
	  </i>
	</a>
      </div>

    </div>
  );
}
}

export default Quote;
