function espace(){
    document.write("<br>")
}

// variable objet on peut mettre des tableau des chiffre des texte ou des fonction

var maison = {
    age: 129,
    repos: "salon",
    manger: "cuisine",
    soin: "douche",
    Surface: function(){
        return 28*52-this.age*5; // this c'est pour appelez une variable dans object
    }
}; // sa baisse car c'est une maison en bois et sa GONFLEEE

document.write(maison.Surface());


// autre facon de faire l'object
var obj = new Object();
obj.HAA = "HAA";
obj.truc = 32;

//comme ca tu rajoute des chose après des ligne de code sa ne s'arrete pas
espace();

//un tableau avec fonction d'object

var TableauObject = [
    {
        nom: "YAN",
    }
    ,
    {
        nom: "stef",
    }
    ,
    {
        nom: "amam", // AMAM c'est elle AMAM
    }
    ,
    {
        nom: "mat",
    }
];
document.write(TableauObject[2].nom);
espace();
// redonner tout ce qui a dans un objet pas en tableau !!

for (var key in obj) {
    espace();
    document.write(key+" "+ obj[key]);
}
espace();
// comment afficher la longueur d'un mots en caractère
vard = "2E817412I";
document.write(vard.length); // on peut aussi a la place mettre toLowerCase() ou toUpperCase() pour tout mettre majuscule ou minuscule
espace();
document.write(vard.toLowerCase()); espace();
document.write(vard.toUpperCase()); espace();

if (vard.includes("mots")){ // verifier si il y a mots dans la variable
    document.write("bonjour");
}

//ou a la place de includes startsWith ou endsWith pour regarder si il est la au debut ou fin

//regarder a quelle position se trouve une lettre
espace();
document.write(vard.indexOf("I"));
//la dernier lettre
espace();
document.write(vard.lastIndexOf("I"));
//remplacer du texte
espace();
document.write(vard.replace("412"," Truc Remplace ")); // j'ai remplacer 412 par le texte suivant

// savoir le caractère a la position en question demander
espace();
document.write(vard.charAt(3)); // a la position 3 demander

// on peut séparer 2 mots pour en faire 1 tableau avec 2 chose en mangant par example l'espace
espace();
vard = "salle manger";
nuvotab = vard.split(" ");
document.write(nuvotab);

// on peut repeat un texte     document.write(nuvotab.repeat(4))

// on peut slice découper entre 1 point a un autre
espace();
document.write(vard.slice(4,7)); // sa nous donne "e m" de "salle manger"






// savoir transformer un numero en texte toString() ou l'inverse Number() et typeof() savoir le type de la variable tableau numero .....

//pour les numero si on fait parseInt() sa met a l'unité un numero 14.38 --> 14 et parseFloat() c'est l'inverse affiche tout

//isInteger() si c'est un chiffre sauf si il s'arrete pas comme pie ou des racine
//toFixed() choisir les nombre après la virgule   toPrecision() arondit a la virgule



// library math ou tu peut avoir les racine carre la puissance aléatoire exetera.....

//document.write(math.Fonction )




// on peut savoir l'heure !!
espace();
var date = new Date;
date.setDate(5); // avec la fonction set on peut choisir de mettre le jour l'heure et plein d'autre la c'est le 5e jour
document.write(date);

