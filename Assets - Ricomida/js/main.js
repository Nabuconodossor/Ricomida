//evento

$("#send__email").click(function(){
  $(".alert").hide().show('');
});

  //click

  $("#color_change1").on("dblclick", function(){
    $(this).css("color", "#DC3530");
  });
  $("#color_change2").on("dblclick", function(){
    $(this).css("color", "#DC3530");
  });

  //toggle

  $(document).ready(function(){
    $("h5").click(function(){
      $(".card-text").toggle();
    });
  });

  //modal

  const enviarCorreo = document.getElementById('enviarCorreo');
  enviarCorreo.addEventListener('click', function (){
    Swal.fire("El Correo fue enviado correctamente")
  })