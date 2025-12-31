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

// Gestion du formulaire
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci ! Votre message a été "envoyé" (simulation).');
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

const titre = document.querySelector('.highlight');
const texte = titre.textContent;
titre.innerHTML = '';

[...texte].forEach((lettre, index) => {
    const span = document.createElement('span');
    span.innerHTML = lettre === ' ' ? '&nbsp;' : lettre;

  // Le délai crée l'effet de vague colorée
  span.style.animationDelay = `${index * 0.15}s`;

    titre.appendChild(span);
});