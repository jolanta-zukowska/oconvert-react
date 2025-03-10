import React from 'react';
import './App.scss'
// on importe le tableau des devises "currencies.ts" dans le fichier App.tsx
import '../../data/currencies.ts'

// on déclare une variable "currencies" qui contient le tableau des devises "currencies.ts"
// on utilise la méthode map pour transformer le tableau des devises en un tableau d'éléments JSX
// on affiche les devises dans la liste des devises

const currencies = [];
console.log(currencies);

// et avec map transforme le en un tableau d'elements JSX pour afficher les devises.

function App() {
	return (
		<div className="app">
			<header className="header">
				<h1 className="header__title">Converter</h1>
				<div className="header__value">1 euro</div>
			</header>

			<ul className="currencies">
				<li className="currency">
					<button className="currency__button" type="button">
						United States Dollar
					</button>
				</li>

				<li className="currency">
					<button className="currency__button" type="button">
						Bulgarian Lev
					</button>
				</li>
			</ul>

			<footer className="result">
				<div className="result__amount">1.09</div>
				<div className="result__currency">United States Dollar</div>
			</footer>
		</div>
	);
}

export default App;