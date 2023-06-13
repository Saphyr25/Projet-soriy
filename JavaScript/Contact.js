function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



// initialisation de la var regexNOm avec l expression reguliere en charge de notre input 'nom'
const regexNom = /^[a-zA-Z\s-]+$/;
// de meme pour l email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function validerFormulaire() {
  // on va recuperer les valeurs des input nom et email et on va les stocker dans des variable nom et email
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();

  // creation d une condition qui dit " si nom est strictement egal a 'rien' au 'vide"
  if (nom === '') {
    // (lancement d une alert) 
    alert('Veuillez entrer votre nom.');
    return false;
    // sinon on verifie que name resepcte le motif definie par le regex
  } else if (!regexNom.test(nom)) {
    // si ce n est pas le cas on renvoie une alert
    alert('Le nom est invalide. Veuillez utiliser uniquement des lettres, espaces et tirets.');
    return false;
  }

  if (email === '') {
    alert('Veuillez entrer votre adresse email.');
    return false; 
  } else if (!regexEmail.test(email)) {
    alert('L\'adresse email est invalide. Veuillez entrer une adresse email valide.');
    return false;
  }

  // Si les deux champs sont valides = envoie de l alert qui dit ...
  alert('Formulaire envoyé avec succès !');
  return true; 
}
