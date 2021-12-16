import {useContext} from "react";
import {AppContext} from "./provider";

const usage = () => {
	const [state, setState] = useContext(AppContext);
	
	const addQuote = (quote) => {
		const newQuotes = [quote, ...state.quotes];
		if(state.filtered === false) {
			state.show = newQuotes
		}
		setState({...state, quotes: newQuotes, show: state.show});
	}
	
	const deleteAll = () => {
		setState({...state, quotes: [], show: []})
	}
	
	const loadQuote = async () => {
		const url = "https://api.kanye.rest/";
		const res = await fetch(url);
		const data = await res.json();
		addQuote(data["quote"]);
	}
	
	const deleteQuote = (quote) => {
		const index = state.quotes.indexOf(quote);
		const _index = state.show.indexOf(quote);
		if(index !== -1) {
			state.quotes.splice(index, 1)
		}
		if(_index !== -1) {
			state.show.splice(_index, 1)
		}
		setState({...state, quotes: state.quotes, show: state.show})
	}
	
	const filterWords = (count) => {
		if(count > 0) {
			const newArr = state.quotes.filter((quote) => {
				return quote.split(" ").length == count;
			})
			setState({...state, show: newArr, filtered: true})
		} else {
			setState({...state, show: state.quotes, filtered: false})
		}
	}
	
	return {
		deleteQuote,
		deleteAll,
		loadQuote,
		addQuote,
		quotes: state.quotes,
		quoteCount: state.quotes.length,
		show: state.show,
		filterWords,
		viewCount: state.show.length
	}
}

export default usage;