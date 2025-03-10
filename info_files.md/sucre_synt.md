const sum = (nb1, nb2) => {
    return nb1 + nb2;
};

const sum = (nb1, nb2) => nb1 + nb2;

// SUCRE SYNTAXIQUE POUR LE RETURN
// le return est explicite dans la première version
// le return est implicite dans la seconde version

*** Quand LA SEULE instruction d'une fonction fléchée c'est un RETURN - on a le droit d'enlèver les accolades et le mot clé "return" *** 

const double = (nb3) => {
    return nb3 *2;
};

const double = (nb3) => nb3 * 2;

const double = nb3 => nb3 * 2;

*** Quand la fonction a UN SEUL PARAMETRE on peut aussi enlèver les parenthèses ***