function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


function openFilter(FilterName) {
    var i;
    var x = document.getElementsByClassName("Filter");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(FilterName).style.display = "block";  
  }
