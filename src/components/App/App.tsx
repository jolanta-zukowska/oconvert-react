import React from 'react';
import './App.scss'
import Footer from '../Footer/Footer';
// on importe le tableau des devises "currencies.ts" dans le fichier App.tsx
// pour faire avec "map" un tableau d'éléments JSX pour afficher les devises
import currencyList from '../../data/currencies';
import Header from '../Header/Header';

// *** ATTENTION les noms de variables et de fichiers sont importants et s'écrivent avec les minuscules ===> data / currencies / listOfCurrencies / listCurrencies etc. ***

// on déclare une variable "currencies" qui contient le tableau des devises "currencies.ts"
// on utilise la méthode map pour transformer le tableau des devises en un tableau d'éléments JSX
// on affiche les devises dans la liste des devises

const currencies = [];
console.log(currencies);

// et avec map transforme le en un tableau d'elements JSX pour afficher les devises.
// ATTENTION 1: il faut utiliser la méthode "map" pour transformer un tableau en un tableau d'éléments JSX
// ATTENTION 2: les noms des fonctions qui sont les COMPOSANT s'écrivent avec une majuscule !!!
// (les autres fonctions s'écrivent avec les minuscules) ===>

function App() {

	// STATE N°1 pour stocker & afficher la devise sélectionnée (=la devise courante)
	// on utilise le hook useState pour stocker la devise sélectionnée
	// QUAND LA DEVISE VA CHNAGER (= nouveau choix d'user) ON VA METTRE A JOUR LE STATE et redessiner l'affichage de la page

	// notre STATE va stocker un objet de type devise avec les props suivantes:
	// - code: string
	// - description: string
	// - rate: number
	// on initialise le state avec la devise par défaut (1ère devise du tableau des devises)
	// on utilise la méthode "useState" pour stocker la devise sélectionnée
	// on utilise la méthode "setSelectedCurrency" pour mettre à jour la devise sélectionnée	

	const [myCurrency, setMyCurrency] = React.useState(currencyList[0]);
	console.log(myCurrency);
	// LA VALEUR INITIALE : première ligne de tableau donc index [0]

	// !!! myCurrency est un OBJET qui contient les propriétés suivantes: code, description, rate 

	// *** A chaque fois qu'on a une donnée qu'on veut rendre évolutive ===> on la place dans un STATE et le STATE on le place dans le JSX ***

	const tableauLi = currencyList.map ((currency) => {
		// ici pour chaque item de tableau "currencies" on retourne un élément JSX  sous forme de <li>
		// avec un bouton qui contient la description de la devise
		// et le code de la devise ===>
		// la fonction MAP permet de transformer le fichier de data (= tableau de devises // array ) en un tableau d'éléments JSX
		return (
				<li 
				key={currency.code} // Ajout d'une clé unique basée sur le code de la devise
				// *** Each child in a list should have a unique "key" prop ***

			  	// si la devise qu'on dessine ici dans la liste est égale à la devise séléctionnée par utilisateur ===> on lui ajoute une classe en plus ===> "selected", sinon elle garde uniquement la clsse "currency"
				// on utilise la condition ternaire pour ajouter une classe en plus à la devise sélectionnée
				// si la devise qu'on dessine ici dans la liste est égale à la devise sélectionnée par l'utilisateur : on lui ajoute une classe en plus : "selected"
				// sinon elle garde uniquement la classe "currency" 
				className={
				myCurrency === currency ? "currency selected" : "currency"
				}>

				<button className="currency__button" type="button" onClick={() => {
				// quand on clique sur une devise : on veut placer la devise clicquée dans le state "myCurrency"
				// on utilise la méthode "setMyCurrency" pour mettre à jour la devise sélectionnée
				// on met à jour le state "myCurrency" avec la devise sélectionnée
				// ce qui va redeclencher le rendu de App et afficher la nouvelle devise sélectionnée
				setMyCurrency(currency);
				}}
				>
			
			{/* United States Dollar */}
			{currency.description}
		</button>
	</li>
		);
	});
	console.log(tableauLi);

	return (
		<div className="app">
			<Header/>

			<ul className="currencies">

			{/* on utilise la méthode "map" pour transformer le tableau des devises en un tableau d'éléments JSX */}
			{/* on affiche les devises  à partir de fichier data dans la liste des devises */}
			{/* Affichage de toutes les devises ===> ici je vais executer la methode map */}

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

			{/* on migre le html de Footer vers le composant séparé Footer.tsx */}
			<Footer myCurrency={myCurrency}/>
		</div>
	);
}

export default App;

// Pour afficher deux chiffres après la virgule au lieu d'arrondir à l'entier le plus proche, vous pouvez utiliser la méthode toFixed(2) au lieu de Math.round(). Voici comment modifier votre code :
// Au lieu de :

// <div className="result__amount">
// {isShort ? Math.round(myCurrency.rate) : myCurrency.rate}
// </div>

// Utilisez :

// <div className="result__amount">
// {isShort ? Number(myCurrency.rate).toFixed(2) : myCurrency.rate}
// </div>