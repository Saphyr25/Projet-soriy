function openServices(ServicesName) {
    var i;
    var x = document.getElementsByClassName("Services");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ServicesName).style.display = "flex";  
  }


  
  
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

div1.addEventListener("click", function() {
  div2.style.background="#A76F51";
  div1.style.background=" #C7815C";

});

div2.addEventListener("click", function() {
  div1.style.background="#A76F51";
  div2.style.background=" #C7815C";
});




