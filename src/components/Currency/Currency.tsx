// le composant qui fait le rendu d'une seule devise ===> LA DEVISE SELECTIONNEE PAR UTILISATEUR
//ce composand rend uNE SEULE DEVISE ===> la devise qui s'affiche dans le footer
// on va utiliser la méthode "useState" pour stocker la devise sélectionnée

import { useState } from "react";
import { ICurrency } from "../../data/currencies";

import "./Currency.scss";

// typage de props
interface CurrencyProps {
	currency: ICurrency;
	setMyCurrency: React.Dispatch<React.SetStateAction<ICurrency>>;
	myCurrency: ICurrency;
}

function Currency({ currency, setMyCurrency, myCurrency }: CurrencyProps) {
	// ICI STATE pour stocker le fait que le taux associé à la devise soit affiché ou pas
	// *** NOUVEAU STATE ===> NOUVELLE CONST destructurée !!! ***
	// *** useState doit être importé de React !!! ***

	const [showRate, setShowRate] = useState(false);

	return (
		<li
			key={currency.code} // Ajout d'une clé unique basée sur le code de la devise
			// *** Each child in a list should have a unique "key" prop ***

			// si la devise qu'on affiche dans la liste de devises est égale à la devise séléctionnée par utilisateur ===> on lui ajoute une classe en plus ===> "selected", sinon elle garde uniquement la classe "currency"
			// on utilise la CONDITION TERNAIRE pour ajouter une classe en plus à la devise sélectionnée

			className={myCurrency === currency ? "currency selected" : "currency"}
		>
			<button
				className="currency__button"
				type="button"
				onClick={() => {
					// quand on clique sur une devise : on veut placer la devise clicquée dans le state "myCurrency"
					// on utilise la méthode "setMyCurrency" pour mettre à jour la devise sélectionnée
					// on met à jour le state "myCurrency" avec la devise sélectionnée
					// ce qui va redeclencher le rendu de App et afficher la nouvelle devise sélectionnée
					setMyCurrency(currency);
				}}
			>
				{/* United States Dollar */}
				{currency.description} {showRate && currency.rate}
				{/* {on peut écrire "{showRate && currency.rate}"}  ou bien "{showRate ? currency.rate}"*/}
			</button>
			<button
				type="button"
				onClick={() => {
					setShowRate(!showRate);
				}}
			>
				{showRate ? "X" : "voir taux"}
			</button>
		</li>
	);
} // fin de la fonction Currency

export default Currency; // export du composant Currency
