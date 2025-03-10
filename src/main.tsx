import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './components/App/App.tsx'


// ici dans le fichier "main.tsx" on fait le rendu du composant APP dans la div avec l'id "root"
// on utilise la méthode "createRoot" pour faire le rendu du composant APP
// on utilise la méthode "render" pour afficher le composant APP dans la div avec l'id "root"
// on utilise la balise <StrictMode> pour afficher les erreurs dans la console
// ===> on importe le composant APP dans le fichier "main.tsx"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
