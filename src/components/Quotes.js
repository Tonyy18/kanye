import React, { Component } from "react";
import "../App.css";
import usage from "../usage";

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

const QuotesPanel = () => {
	const {quotes} = usage();
	return (
		<div className="quotes">
			<h1>Quotes</h1>
			{quotes.map((quote) => {
				return (<Quote quoteText={quote} />)
			})}
		</div>
	)
}

export default QuotesPanel