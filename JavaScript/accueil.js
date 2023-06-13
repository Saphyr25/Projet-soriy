// ouverture et fermeture de l'overlay lors du clique
function openNav() {
  // relié au onclick du menu hamburger, l overlay s'ouvrira lors d'un clique
    document.getElementById("myNav").style.width = "100%"; 
  }
  function closeNav() {
    // relié au bouton en croix dans l'overlay , l'overlay se fermera lors d'un clique
    document.getElementById("myNav").style.width = "0%";
  }

  
// ------------------------Slide Show
// Création de la variable index avec une valeur donné de 0
  let index = 0;

  // Création de la fonction displayImages
  displayImages();
  function displayImages() {
  // initialisation de la variable i sans valeur pour l'instant
    let i;
  // initialiation de la var images qui regroupe tous les éléments possédant la class "image"
    var images = document.getElementsByClassName("image");
   //Boucle for qui nous dis que chaque éléments image est parcourus et voit son display définie sur none  
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    // ici on incrémente index ce qui nous déplace vers la prochaine image
    index++;
    //on verifie la condition: si index est supérieur a la longueur d'images (le nombre d'images)donc si toutes les images ont été parcourus
    if (index > images.length) {
    //si cest le cas: on réinitialise index a 1 pour revenir a la premiere image
      index = 1;
    }
    // l'image correspondant a l'index actuelle se voit définir un display block( elle devient donc visible)
    images[index-1].style.display = "block";
    // la fonction displayImages sera rappelé apres un delai de 2500 millisecondes
    setTimeout(displayImages, 2500); 
  }

// simple alert lorsqu on cliquqe sur le bouton avec l attribu functionClique
  function functionClique(){
    alert("Le panier a bien été validé!");
  }