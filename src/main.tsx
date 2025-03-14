import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './components/App/App.tsx'


// ici dans le fichier "main.tsx" on fait le rendu du composant APP dans la div avec l'id "root"
// on utilise la méthode "createRoot" pour faire le rendu du composant APP
// on utilise la méthode "render" pour afficher le composant APP dans la div avec l'id "root"
// on utilise la balise <StrictMode> pour afficher les erreurs dans la console
// ===> on importe le composant APP dans le fichier "main.tsx"

// on fait le rendu du composant App dans le div ayant l'id root

const myRootElem = document.getElementById("root");

if (myRootElem) {
	// ici on est sur que createRoot reçoit un container car si c'est null on passe dans le else
	createRoot(myRootElem).render(<App />);
} else {
	// erreur
}

// autre version avec le non null assertion
// createRoot(document.getElementById("root")!).render(<App />);

// la fonction createRoot veut un paramètre de type Container (c'est un element)
// la fonction getElementById renvoie element OU null
// on va ajouter le point d'exclamation (non null assertion) qui dit à TS t'inquiete, c'est sur c'est pas null


// createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


