$(document).ready(function() {
  $('#españolBandera').on('click', function(e) {
      e.preventDefault();
      console.log('Hola');

      // Realizar una solicitud AJAX para cargar el archivo JSON
      $.getJSON('./src/json/es.json', function(data) {
        console.log(data);
        

          // Actualizar el contenido de la página con las traducciones
          $('#primerTitulo').text(data.primerTitulo);
          $('#segundoTitulo').text(data.segundoTitulo);
          $('#description').text(data.description);
          // Actualiza otros elementos según sea necesario
      }).fail(function() {
          console.error('No se pudo cargar el archivo JSON.');
      });
  });

  $('#inglesBandera').on('click', function(e){
    $.getJSON('./src/json/en.json', function (data) {
      $('#primerTitulo').text(data.primerTitulo);
      $('#segundoTitulo').text(data.segundoTitulo)
    }).fail(function(){
      console.error('No se pudo cargar el archivo JSON.');

    })
  });
});