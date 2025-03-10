import React from 'react';
import './App.scss'
// on importe le tableau des devises "currencies.ts" dans le fichier App.tsx
// pour faire avec "map" un tableau d'éléments JSX pour afficher les devises
import currencyList from '../../data/currencies.ts';

// *** ATTENTION les noms de variables et de fichiers sont importants et s'écrivent avec les minuscules ===> data / currencies / listOfCurrencies / listCurrencies etc. ***

// on déclare une variable "currencies" qui contient le tableau des devises "currencies.ts"
// on utilise la méthode map pour transformer le tableau des devises en un tableau d'éléments JSX
// on affiche les devises dans la liste des devises

const currencies = [];
console.log(currencies);

// et avec map transforme le en un tableau d'elements JSX pour afficher les devises.
// ATTENTION 1: il faut utiliser la méthode "map" pour transformer un tableau en un tableau d'éléments JSX
// ATTENTION 2: les noms des fonctions qui sont les COMPOSANT s'écrivent avec une majuscule !!!
// (les autres fonctions s'écrivent avec les minuscules) 
function App() {

	const tableauLi = currencyList.map ((currency) => {
		// ici pour chaque item de tablau "currencies" on retourne un élément JSX  sous forme de <li>
		// avec un bouton qui contient la description de la devise
		// et le code de la devise ===>
		// la fonction MAP permet de transformer le fichier de data (= tableau de devises // array ) en un tableau d'éléments JSX
		return (
			<li className="currency" key={currency.code}>
		<button className="currency__button" type="button">
			{/* United States Dollar */}
			{currency.description}
		</button>
	</li>
		);
	});
	console.log(tableauLi);

	return (
		<div className="app">
			<header className="header">
				<h1 className="header__title">Converter</h1>
				<div className="header__value">1 euro</div>
			</header>

			<ul className="currencies">

			{/* on utilise la méthode "map" pour transformer le tableau des devises en un tableau d'éléments JSX */}
			{/* on affiche les devises  à partir de fichier data dans la liste des devises */}
			{/* ici je vais executer la methode map */}

			{
				tableauLi
			}

				{/* <li className="currency">
					<button className="currency__button" type="button">
						United States Dollar
					</button>
				</li>

				*** ICI ON COMMENTE LES DEVISES SAISIES EN DUR DANS LE CODE

				<li className="currency">
					<button className="currency__button" type="button">
						Bulgarian Lev
					</button>
				</li> */}

			</ul>

			<footer className="result">
				<div className="result__amount">1.09</div>
				<div className="result__currency">United States Dollar</div>
			</footer>
		</div>
	);
}

export default App;