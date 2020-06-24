

//animacion bio
$(window).on('scroll', function(){

		let scrollUsuario = $(window).scrollTop();

		let profundidad = $('.bioVisible').offset().top - $(window).innerHeight() * .6;

		if (scrollUsuario > profundidad) {

  			
    $('.bioVisible').each((i,elem) => {
    		setTimeout(()=> $(elem).addClass('ver'), i * 250);
  			});

	}
});


//animacion tarifas
$(window).on('scroll', function(){

		let scrollUsuario = $(window).scrollTop();

		let profundidad = $('.precioVisible').offset().top - $(window).innerHeight() * .6;

		if (scrollUsuario > profundidad) {

  			$('.precioVisible').each((i,elem) => {
    		setTimeout(()=> $(elem).addClass('fadeUp'), i * 250);
  			});

	}

});



$(window).scroll(function() {
        $('.serviciosVisible').each(function(){

        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + 900) {
              
                $(this).addClass('fadeScale');
            }
        });
    });


$(window).scroll(function() {
        $('.fadeheaderLeft').each(function(){

        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + 600) {

                $(this).addClass('fadeLeft');
            }
        });
    });




$(window).on('scroll', function(){

  let scrollUsuario = $(window).scrollTop();

  let profundidadHdos = $('.fadeheaderRight').offset().top - $(window).innerHeight()* .8;

  if(scrollUsuario > profundidadHdos) {

    $('.fadeheaderRight').addClass('fadeRight');
   

  }

});

//menu responsive
    $('.barras').on('click', muestraMenu);
    $('#cerrar').on('click', muestraMenu);
    $('.desplazar').on('click', muestraMenu);



      function muestraMenu() {
      $('#menu').toggleClass('abierto');
    }


function validacion() {

  let nombre = document.getElementById("campoNombre").value;
  let telefono = document.getElementById("campoTelefono").value;
  let email = document.getElementById("campoEmail").value;
  let mensaje = document.getElementById("campoMensaje").value; 
  let isChecked = document.getElementById("aprobar").checked;

  if (nombre === null || telefono === null  ||  email === null || mensaje === null) {

            msg("No se enviaron los datos. Por favor, inténtelo de nuevo");
            return false;

      } else {

            if (/^\s+$/.test(nombre) ||  nombre.length < 2 || /[0-9]/.test(nombre)) {

                  msg("El campo 'Nombre' no es correcto. Es obligatorio, de mínimo 2 letras y no puede contener números.", 5000);
                  return false;
            }

            else if (!/^\d{9}$/.test(telefono)) {

                  msg("El campo 'Teléfono' no es correcto. Es obligatorio, y el formato debe ser 000000000", 5000);
                  return false;

            }


            else if ( email.length === 0 || email.indexOf("@") < 1 || email.indexOf(".") < 1 ){

                  msg("El campo 'Email' no es correcto. Es obligatorio, y debes indicar una '@' y un '.'");
                  return false;

            }

            else if ( !isChecked ){

                  msg("Debes aceptar la política de privacidad");
                  return false;

            }
            
            else {
                  return true;
            }
      }
}

function msg(par1, par2 = 2000) {

      document.getElementById('mensaje').innerHTML = par1;

      document.getElementById('alerta').classList.add('alertaVer');

      setTimeout( function(){
            document.getElementById('alerta').classList.remove('alertaVer');
      }, par2);

}



$(document).ready(function(){
    //desplazamiento menu
    $('.desplazar').on('click', function(){

	let id = $(this).data('nivel');			
	let profundidad = $(id).offset().top;

	$('html').animate({
		scrollTop: profundidad
	}, 1000);

});


    //desplazamiento boton
    $('.bajar').on('click', function(){

	let id = $(this).data('nivel');			
	let profundidad = $(id).offset().top;

	$('html').animate({
		scrollTop: profundidad
	}, 1000);

});


    });