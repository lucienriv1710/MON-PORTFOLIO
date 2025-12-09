const projet = [
    {
        nom: 'Parkease',
        categorie: 'DESIGN',
        annee: 2025,
        image: 'parkease.png'
    },
    {
        nom: 'Culture & Co',
        categorie: 'DESIGN',
        annee: 2025,
        image: 'culture&co.png'
    },
    {
        nom: 'Wanderly',
        categorie: 'DESIGN',
        annee: 2025,
        image: 'wanderly.png'
    },
];
const projets = document.getElementById("mes-projets")


for (let i=0; i<projet.length; i++) {
    const carte = document.createElement("div");
    carte.className = "mes-cartes";

    projets.appendChild(carte);

    const image = document.createElement("img");
    image.src=projet[i].image;
    image.style.width="200px"
    carte.appendChild(image);

    const nom = document.createElement("h3");
    nom.textContent=projet[i].nom;
    carte.appendChild(nom);
    
    const categorie = document.createElement("p");
    categorie.textContent=`Catégorie : ${projet[i].categorie}`;
    carte.appendChild(categorie);

    const annee = document.createElement("h4");
    annee.textContent=projet[i].annee;
    carte.appendChild(annee);
}