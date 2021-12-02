import React, { Component } from 'react';
import FlexSection from "./components/FlexSection";
import './App.css';
import Quotes from "./components/Quotes";

class App extends Component {
  render() {
    return (
		<div className="container">
			<header className="header"><h1>Kanye Oneliners</h1></header>
			<FlexSection />
			<Quotes />
		</div>
    );
  }
}

export default App;
