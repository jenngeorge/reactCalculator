import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Calculator from './calculator.jsx';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.querySelector("#root");
	ReactDOM.render(<Calculator/>, root);
});
