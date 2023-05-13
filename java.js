// animación de desplazamiento suave
$('a.mendoza').click(function() {
    $('html, body').animate({
      scrollTop: $('h2#mendoza').offset().top
    }, 1000);
  });

  $('a.larioja').click(function() {
    $('html, body').animate({
      scrollTop: $('h2#larioja').offset().top
    }, 1000);
  });

  $('a.cordoba').click(function() {
    $('html, body').animate({
      scrollTop: $('h2#cordoba').offset().top
    }, 1000);
  });
  // muestra el botón cuando el usuario se desplaza más abajo en la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// lleva al usuario de vuelta al inicio de la página cuando se hace clic en el botón
function topFunction() {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

  
