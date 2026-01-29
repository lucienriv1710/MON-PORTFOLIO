// Animation simple lors du scroll
const cartes = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

cartes.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});


// 1. On sélectionne toutes les cartes
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // 2. On ajoute une transition fluide en CSS via le JS (si ce n'est pas déjà fait)
    card.style.transition = "box-shadow 0.3s ease, transform 0.3s ease";

    // 3. Événement : La souris entre sur la carte
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0px 15px 30px rgba(0, 0, 0, 0.5)";
        card.style.transform = "translateY(-5px)"; // Optionnel : soulève un peu la carte
    });

    // 4. Événement : La souris quitte la carte
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "none"; // On retire l'ombre
        card.style.transform = "translateY(0)"; // On remet à la place initiale
    });
});

// 1. On sélectionne toutes les cartes
const formu = document.querySelectorAll('.formulaire');

formu.forEach(formulaire => {
    // 2. On ajoute une transition fluide en CSS via le JS (si ce n'est pas déjà fait)
    formulaire.style.transition = "box-shadow 0.3s ease, transform 0.3s ease";

    // 3. Événement : La souris entre sur la carte
    formulaire.addEventListener('mouseenter', () => {
        formulaire.style.boxShadow = "0px 15px 30px rgba(0, 0, 0, 0.5)";
        formulaire.style.transform = "translateY(-5px)"; // Optionnel : soulève un peu la carte
    });

    // 4. Événement : La souris quitte la carte
    formulaire.addEventListener('mouseleave', () => {
        formulaire.style.boxShadow = "none"; // On retire l'ombre
        formulaire.style.transform = "translateY(0)"; // On remet à la place initiale
    });
});




// Initialise EmailJS avec ta clé publique
emailjs.init("c5g5AknBe_s_I5rA0");

// Gère l'envoi du formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    // Récupère les valeurs du formulaire
    const params = {
        nom: this.nom.value,
        email: this.email.value,
        message: this.message.value
    };
    
    // Envoie l'email
    emailjs.send("portfolio", "template_x15joai", params)
        .then(function() {
            alert('Message envoyé avec succès ! ✅');
            document.getElementById('contact-form').reset(); // Vide le formulaire
        })
        .catch(function(error) {
            console.log('Détails erreur:', error); // Affiche l'erreur complète dans la console
            alert('Erreur : ' + error.text); // Affiche le message d'erreur précis
        });
});