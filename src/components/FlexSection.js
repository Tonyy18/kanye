import React, { Component } from 'react';
import usage from "../usage";


const ButtonBox = () => {
	const {loadQuote, deleteAll} = usage();
	return (
		<div className="box">
			<div>
				<button onClick={loadQuote}>Fetch 1 quote</button>
				<button onClick={deleteAll}>Delete all quotes</button>
			</div>
		</div>
	)
}
const WordCount = () => {
	const {filterWords} = usage();
	
	return (
		<div className="box">
			<div>
				<p className="wordFilter">Word count filter</p>
				<input type="number" onChange={(e) => filterWords(e.target.value)} placeholder="Filter quotes" />
			</div>
		</div>
	)
}
const TotalCount = () => {
	const {quoteCount, viewCount} = usage();
	return (
		<div className="box">
			<div>
				<p className="count">Total quote count: {quoteCount}</p>
				<p className="count">Quotes in view: {viewCount}</p>
			</div>
		</div>
	)
}
class FlexSection extends Component {
	render() {
		return (
			<div className="flexSection">
				<ButtonBox />
				<WordCount />
				<TotalCount />
			</div>
		)
	}
}

export default FlexSection

