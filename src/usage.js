import {useContext} from "react";
import {AppContext} from "./provider";

const usage = () => {
	const [state, setState] = useContext(AppContext);
	const addQuote = (quote) => {
		const newQuotes = [...state.quotes, quote];
		setState({...state, quotes: []});
	}
	return {
		addQuote,
		quotes: state.quotes
	}
}

export default usage;