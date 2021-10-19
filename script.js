  
  //Funksjon for kopiering av kode til utklippstavle
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  //Responsive navigeringsbar
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


//Popover knapp
  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("mySidebar");
  if (x.className === "sidebar") {
    x.className += " responsive";
  } else {
    x.className = "sidebar";
  }
}



  //Sjekk input
  function sjekkTall() {
    var tall = document.getElementById('tall').value;
    if(tall == 5){
       resultat ="Tallet er 5";
       }else {
       resultat = "Tallet er ikke 5";
       }
       document.getElementById('resultat').innerHTML = resultat;
  }


   