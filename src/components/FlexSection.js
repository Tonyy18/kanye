import React, { Component, useState } from 'react';
import "../App.css"
import usage from "../usage";

class Button extends Component {
	render() {
		return (
			<button>{this.props.text}</button>
		)
	}
}
const ButtonBox = () => {
	const addQuote = {usage};
	const clicked = () => {
		addQuote("moi");
	}
	return (
		<div className="box">
			<div>
				<Button text="Fetch 1 quote" onClick={clicked}></Button>
				<Button text="Delete all quotes"></Button>
			</div>
		</div>
	)
}
class WordCount extends Component {
	render() {
		return (
			<div className="box">
				<div>
					<p className="wordFilter">Word count filter</p>
					<input type="text" placeholder="Filter quotes" />
				</div>
			</div>
		)
	}
}
class TotalCount extends Component {
	render() {
		return (
			<div className="box">
				<div>
					<p className="count">Total quote count: 0</p>
					<p className="count">Quotes in view: 0</p>
				</div>
			</div>
		)
	}
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

