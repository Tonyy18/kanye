import React, { Component, useContext } from "react";
import usage from "../usage";

const DeleteButton = (props) => {
	const {deleteQuote} = usage();
	const quoteDelete = () => {
		deleteQuote(props.quoteText)
	}
	return (
		<button onClick={quoteDelete}>Delete</button>
	)
}

class Quote extends Component {
	render() {
		return (
			<div className="quote">
				<p>{this.props.quoteText}</p><DeleteButton quoteText={this.props.quoteText}/>
			</div>
		)
	}
}

class EmptyItem extends Component {
	render() {
		return (
			<div className="empty">
				<p>No Quotes</p>
			</div>
		)
	}
}

const QuotesPanel = () => {
	const {show} = usage();
	return (
		<div className="quotes">
			<h1>Quotes</h1>
			{show.length === 0 &&
				<EmptyItem />
			}
			{show.map((quote, index) => {
				return (<Quote key={quote + "-" + index} quoteText={quote} />)
			})}
		</div>
	)
}

export default QuotesPanel