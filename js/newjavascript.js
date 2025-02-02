// le java script importe du html prendant la création de site html

// des variable simple pas obliger
var H = 5;
var L = 3;
var l = 4;

//une fonction en java
function pablo(H,L,l){ // a coté des valeur on peut mettre des valeur par défaux pablo(H=4,L=5,l=3)
return H*L*l+"m cube";
}
document.write(pablo(H,L,l)); // on peut changer ses valeur de la fonction

// fonction pour allez a la ligne html
function espace(){
    document.write("<br>")
}
espace();

var variable = "texte";
// ecrire du texte en html
document.write(variable);
// pour ecrire dans la console
console.log("HAAAAaa");
// pour signaler une erreur / warn dans la console
console.warn('il y a une erreur <-- warn');

console.error('il y a une erreur <-- error');

// test pour savoir en combien de seconde il a pue faire la commande

// ("test") c'est comment il s'appel
console.time("test");
// on met des commande entre
console.timeEnd("test");
// alert
//alert("pablo est la")


// une table ou on peut mettre plusieur chose en meme temps 

console.table(["YAANOCH","MOI","lui"]);


espace();


// une question
var a=1;
var b=2;
if (a>b) { // ou inferieur a<b
    document.write("c'est supérieur");
}
if (a==b) {
    document.write("c'est pareil");
}
// sinon alors
if (a>b) {
    // normal
    document.write("c'est supérieur");
} else {
    //sinon
    document.write("c'est inferieur");
}

//confirmer une action a l'utilisateur
//var conf = confirm("voulez vous confirmer")
//et on peut verifier avec true ou false

//demander quelque chose a l'utilisateur
//var promb = prompt("clavier")


espace();


// tout sauf ca 

if (a>!b) {
    document.write("C'EST PAS CA");
}


espace();


//mini if

var c= 100;
var reponse;
c==100 ? (reponse=true) : (reponse= false);
document.write(reponse);


espace();


// plus mini if

reponse = c==100 ? "true" : "false";
document.write(reponse);


espace();


// switch
var jour = 72849;
switch (jour) {
    case 1:
        document.write("on est lundi");
        break;
    case 2:
        document.write("on est mardi");
        break;
    case 3:
        document.write("on est mercredi");
        break;
    case 4:
        document.write("on est jeudi");
        break;
    case 5:
        document.write("on est jeudi");
        break;
    // autrement
    default:
        document.write("c'est pas un jour");
        break;

}



espace();
// le OU dans le if
if (a>b || b<a) {
    document.write("ou");
}
// le ET dans le if
if (a>b && b<a) {
    document.write("et");
}



espace();


// boucle for jusqu'a ce qu'il trouve 7 avec break
for (i = 1; i < 10; i++){
    if (i==7){
        document.write("777777777777777777"+"<br>");
        break;
    } else {
        document.write("bol de chocapic manger "+i+"<br>");
    }
}

//boucle while
a = 0;
b=100;
while (a<=b){
    a=a+5;
    document.write("a ="+a+"<br>");
}
//boucle do while s'execute aumoins 1 fois
a = 0;
b=100;
do{
    a=a+5;
    document.write("a ="+a+"<br>");
}while (a<=b);

// + addition  - soustraction   * multiplication    ** puissance   / divition   % reste de la divition    ++ rajouter 1    -- retirer 1



//évenement sourie sur par exemple image / boutton / body sa dépend de l'évenement

//click
//RightCLick
//Doubleclick
//mousehover
//mouse out
//mouse down
//move up
//key press
//key up
//load
//unload
//resize
//scroll

//       <button on------="fonction java">clicker sur moi</button>        exemple de boutton



//comment effacer un endroit du tableau
var tableau = ["a","c","b"];
tableau[0] = "AAAA";
document.write(tableau);
// comment ranger un tableau
espace();
tableau.sort();
document.write(tableau);

//ou inversé
espace();
tableau.reverse();
document.write(tableau);

//retirer le dernier du tableaup pop ou mettre a la suite push et sinon on peut faire l'inverse shift enlever le premier et unshift rajouter le premier
espace();
tableau.pop;
//tableau.shift
document.write(tableau);

espace();
tableau.push("rajouter");
//tableau.unshift("premier")
document.write(tableau);


//on peut aussi coller 2 tableau ensemble avec concate
espace();
multitable = tableau.concat(tableau);
document.write(multitable);

//transformer le tableau en chaine pour changer les virgule

espace();
tableauchanger = tableau.join("---"); // juste pour séparer
document.write(tableauchanger);

//on coupe des bout de tableau de celle au debut
espace();
document.write(tableau.slice(-2)); // ou -2 qui coupe tout et garde 2 a droite ou autre

// on peut aussi rajouter des valeur a des position du tableau
tableau2 = ["A","B","C","D","E","F"];
espace();
tableau2.splice(2,3 , "je suis la :)","hhg"); // position 2 et remplacer 3 chose après et sa se met a l'exterieur du document write sinon sa ne fonctionnera pas
document.write(tableau2);

// truc qui sert a rien c'est un tableau ou PASSSS 
espace();
document.write(Array.isArray(tableau2));

// et savoir a quel position la valeur est
tableau2 = ["A","B","C","D","E","F"];
espace();
document.write(tableau2.indexOf("F"));

// on peut appelez chaque valeur du tabelau de cette facon
espace();
function boucle(truc_appeler){
    document.write(truc_appeler) 
}
tableau2.forEach(boucle)


// tostring sa transforme en texte

// tableau2.fill("bla") sa remplace tout par bla donc bla,bla,bla

// savoir si un tableau contien une valeur en particulier
espace();
document.write(tableau2.includes(D));

// on peut filtrer un tableau de nombre et garder le reste tableau.filter(fonction)