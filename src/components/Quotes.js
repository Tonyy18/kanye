import React, { Component } from "react";
import "../App.css";

class DeleteButton extends Component {
	render() {
		return (
			<button>Delete</button>
		)
	}
}

class Quote extends Component {
	
	render() {
		return (
			<div className="quote">
				<p>{this.props.quoteText}</p><DeleteButton/>
			</div>
		)
	}
}

class QuotesPanel extends Component {
	render() {
		return (
			<div className="quotes">
				<h1>Quotes</h1>
				<Quote quoteText="Quote" />
				<Quote quoteText="Quote" />
				<Quote quoteText="Quote" />
				<Quote quoteText="Quote" />
			</div>
		)
	}
}

export default QuotesPanel