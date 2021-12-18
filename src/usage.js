import {useContext} from "react";
import {AppContext} from "./provider";

const usage = () => {
	const [state, setState] = useContext(AppContext);
	
	const filterWords = (arr, count) => {
		const newArr = arr.filter((quote) => {
			return quote.split(" ").length == count;
		})
		return newArr;
	}

	const addQuote = (quote) => {
		const newQuotes = [quote, ...state.quotes];
		if(state.filtered === false) {
			state.show = newQuotes
		} else {
			state.show = filterWords(newQuotes, state.filterValue)
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
		state.quotes.splice(index, 1)
		const _index = state.show.indexOf(quote);
		if(state.filtered) {
			state.show.splice(_index, 1)
		}
		setState({...state, quotes: state.quotes, show: state.show})
	}

	const filterQuotes = (count) => {
		if(count > 0) {
			const newArr = filterWords(state.quotes, count)
			setState({...state, show: newArr, filtered: true, filterValue: count})
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
		filterQuotes,
		viewCount: state.show.length
	}
}

export default usage;