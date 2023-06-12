function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Fin de la nav
let index = 0;
displayImages();

function displayImages() {
  let a;
  const images = document.getElementsByClassName("image");
  for (a = 0; a < images.length; a++) {
    images[a].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2500); 
}






// Création de la fonction openServices qui va s'activer lors d'un onclick et qui va nous permettre de spécifier des éléments
function openServices(ServicesName) {
  // initialisation de la var i sans valeur
    var i;
    // initialisation de la var x avec comme valeur tous les éléments ayan comme class "services"
    var x = document.getElementsByClassName("Services");
    // Boucle for qui va permettre de definir un display none a tous les éléments services
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    // initialisation d'un display flex a l'élément cliqué qui va le rendre visible
    document.getElementById(ServicesName).style.display = "flex";  
  }


  
  // initialisation de la var div1 qui a pour valeur l'ID div1 
var div1 = document.getElementById("div1");
  // initialisation de la var div2 qui a pour valeur l'ID div12
var div2 = document.getElementById("div2");
// cette ligne de code crée un event , lorsqu'on clique sur div1 une fonctions éxecute
div1.addEventListener("click", function() {
  // la couleurs  des div sont alternés
  div2.style.background="#A76F51";
  div1.style.background=" #C7815C";

});
// cette ligne de code crée un event , lorsqu'on clique sur div2 une fonctions éxecute
div2.addEventListener("click", function() {
  div1.style.background="#A76F51";
  div2.style.background=" #C7815C";
});



// .dropdown-content {
//   display: none;
//   position: absolute;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
// }
// .dropdown-content a {
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// }

// .dropdown-content a:hover {
//   background-color: #ddd;
// }

// .dropdown:hover .dropdown-content {
//   display: block;
// }

// </style>
// </head>
// <body>

// <div class="navbar">
//   <div class="dropdown">
//     <button class="dropbtn">Dropdown 
//       <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-content">
//       <a href="#">Link 1</a>
//       <a href="#">Link 2</a>
//       <a href="#">Link 3</a>
//     </div>
//   </div> 
// </div>

