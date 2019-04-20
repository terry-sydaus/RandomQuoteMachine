// QuoteContent.js
import React, { Component } from 'react';
import TextTransition from 'react-text-transition';

class QuoteContent extends Component {
  render() {
    return (
	<p id={this.props.id} className={this.props.class}>
	<TextTransition 
	  text={this.props.value} 
	  delay={0} 
	  order={Math.random()} 
	  spring={ {stiffness: 33, damping: 33} } />
      </p>
    );
  }
}

export default QuoteContent;
