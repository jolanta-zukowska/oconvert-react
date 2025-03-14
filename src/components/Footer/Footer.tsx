
// Import de la librairie React
import React from "react";
import { Currency } from "../../data/currencies";
import "./Footer.scss";

interface FooterProps {
    // ainsi "myCurrency" est de type "Currency" (et le typage = interface = est définie le fichier "currencies.ts")
    myCurrency: Currency;
}

// Création du composant Footer
// Ce composant affiche le taux de change de la devise sélectionnée
// Il affiche le taux de change avec 2 décimales si la devise est arrondie
// Il affiche le taux de change sans décimales si la devise n'est pas arrondie

// STATE N°1 pour stocker et afficher la devise sélectionnée par l'utilisateur ===>
function Footer({myCurrency}: FooterProps) {

    // STATE N°2 pour stocker et afficher ou non toutes les décimales de taux de change ===>
    const [isShort, setIsShort] = React.useState(false);

    return (

        <footer className="result">
        {/* <div className="result__amount">1.09</div> */}
        <div className="result__amount">{isShort ? Number(myCurrency.rate).toFixed(2) : myCurrency.rate}</div>
        {/* <div className="result__currency">United States Dollar</div> */}
        <div className="result__currency">{myCurrency.description}</div>
        <button type="button" className="result__button"
        onClick={()=> 
            {
            setIsShort(!isShort);
            }}>
            {isShort ? "Désarrondir le taux" : "Arrondir le taux" }</button>
        </footer>

    )
};

// Export du composant Footer
export default Footer;