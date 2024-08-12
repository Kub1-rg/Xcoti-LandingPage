$(document).ready(function() {
  $('#españolBandera').on('click', function(e) {
      e.preventDefault();
      console.log('Hola');

      // Realizar una solicitud AJAX para cargar el archivo JSON
      $.getJSON('./src/json/es.json', function(data) {
        // console.log(data);
        // console.log(data.menu);
        

          // Actualizar el contenido de la página con las traducciones
          $('#primerTitulo').text(data.primerTitulo);
          $('#segundoTitulo').text(data.segundoTitulo);
          $('#descCripcionTitulo').text(data.descCripcionTitulo);
          $('#primerSeccionPrimerParrafoMovil').text(data.primerSeccionPrimerParrafoMovil);
          $('#botonTexto').text(data.botonTexto);
          $('#tituloMenu').text(data.menu.tituloMenu);
          $('#subTituloTitulo').text(data.menu.subTituloTitulo);
          $('#descripcionSubTitulo').text(data.menu.descripcionSubTitulo);

          $('#primerColumnaServiciosTitulo').text(data.menu.primerSeccionServiciosTitulo);
          $('#primerColumnaServiciosDesc').text(data.menu.primerSeccionServiciosDesc);

          // console.log(data.menu.primerColumnaServiciosTituloPFila);
          
          $('#segundaColumnaServiciosTituloPFila').text(data.menu.segundaColumnaServiciosTituloPFila);
          $('#segundaColumnaServiciosDescPFila').text(data.menu.segundaColumnaServiciosDescPFila);


          $('#primerColumnaServiciosTituloSFila').text(data.menu.primerColumnaServiciosTituloSFila);
          $('#primerColumnaServiciosDescSFila').text(data.menu.primerColumnaServiciosDescSFila);

          $('#segundaColumnaServiciosTituloSFila').text(data.menu.segundaColumnaServiciosTituloSFila);
          $('#segundaColumnaServiciosDescSFila').text(data.menu.segundaColumnaServiciosDescSFila);

          $('#primerColumnaServiciosTituloTFila').text(data.menu.primerColumnaServiciosTituloTFila);
          $('#primerColumnaServiciosDescTFila').text(data.menu.primerColumnaServiciosDescTFila);

          $('#segundaColumnaServiciosTituloTFila').text(data.menu.segundaColumnaServiciosTituloTFila);
          $('#segundaColumnaServiciosDescTFila').text(data.menu.segundaColumnaServiciosDescTFila);
          
          // ----------------| Sección de Servicios Movil |----------------
          
          $('#primerSeccionTituloMovil').text(data.menu.primerSeccionTituloMovil);
          $('#primerSeccionSubTituloMovil').text(data.menu.primerSeccionSubTituloMovil);
          $('#primerSeccionDescTituloMovil').text(data.menu.primerSeccionDescTituloMovil);
          $('#tituloServiciosSeccionMavilUno').text(data.menu.tituloServiciosSeccionMavilUno);
          $('#tituloServiciosSeccionMavilDos').text(data.menu.tituloServiciosSeccionMavilDos);

          // ----------------| Segunda Sección de Servicios Movil |----------------
          $('#segundaSeccionTituloMovil').text(data.menu.segundaSeccionTituloMovil);
          $('#segundaSeccionSubTituloMovil').text(data.menu.segundaSeccionSubTituloMovil);
          $('#segundaSeccionDescTituloMovil').text(data.menu.segundaSeccionDescTituloMovil);
          // ----------------| FIN Segunda Sección de Servicios Movil |----------------

          
          // ----------------| FIN Sección de Servicios Movil |----------------

          // ----------------| Sección de Barcos |----------------
          $('#titulSeccionBarcos').text(data.menu.titulSeccionBarcos);
          $('#descSeccionBarcos').text(data.menu.descSeccionBarcos);

          $('#segundoTitulSeccionBarcos').text(data.menu.segundoTitulSeccionBarcos);
          $('#segundaDescSeccionBarcos').text(data.menu.descSeccionBarcos);
          // ----------------| FIN Sección de Barcos |----------------
          
          
          // ----------------| Sección de Carrusel |----------------
          
          $('#primerTituloSeccionCarrusel').text(data.menu.primerTituloSeccionCarrusel);
          $('#primerDescSeccionCarrusel').text(data.menu.primerDescSeccionCarrusel);

          // ----------------| FIN Sección de Carrusel |----------------


          // ----------------| Sección de Footer |----------------
          
          $('#primerTituloSeccionContacto').text(data.menu.primerTituloSeccionContacto);
          $('#primerDescSeccionContacto').text(data.menu.primerDescSeccionContacto);
          $('#segundaDescSeccionContacto').text(data.menu.segundaDescSeccionContacto);
          $('#seccionContactoMobileTitulo').text(data.menu.seccionContactoMobileTitulo);
          $('#seccionContactonesDescMobil').text(data.menu.seccionContactonesDescMobil);
          $('#seccionContactoMobileDesc').text(data.menu.seccionContactoMobileDesc);
          $('#botonContactanos').text(data.menu.botonContactanos);
          $('#botonSeccionContactoMobil').text(data.menu.botonSeccionContactoMobil);

          // ----------------| FIN Sección de Carrusel |----------------

      }).fail(function() {
          console.error('No se pudo cargar el archivo JSON.');
      });
  });

  $('#inglesBandera').on('click', function(e){
    $.getJSON('./src/json/en.json', function (data) {
      // / Actualizar el contenido de la página con las traducciones
      
          $('#primerTitulo').text(data.primerTitulo);
          $('#segundoTitulo').text(data.segundoTitulo);
          $('#descCripcionTitulo').text(data.descCripcionTitulo);
          $('#primerSeccionPrimerParrafoMovil').text(data.primerSeccionPrimerParrafoMovil);
          $('#botonTexto').text(data.botonTexto);
          $('#tituloMenu').text(data.menu.tituloMenu);
          $('#subTituloTitulo').text(data.menu.subTituloTitulo);
          $('#descripcionSubTitulo').text(data.menu.descripcionSubTitulo);

          $('#primerColumnaServiciosTitulo').text(data.menu.primerSeccionServiciosTitulo);
          $('#primerColumnaServiciosDesc').text(data.menu.primerSeccionServiciosDesc);

          // console.log(data.menu.primerColumnaServiciosTituloPFila);
          
          $('#segundaColumnaServiciosTituloPFila').text(data.menu.segundaColumnaServiciosTituloPFila);
          $('#segundaColumnaServiciosDescPFila').text(data.menu.segundaColumnaServiciosDescPFila);


          $('#primerColumnaServiciosTituloSFila').text(data.menu.primerColumnaServiciosTituloSFila);
          $('#primerColumnaServiciosDescSFila').text(data.menu.primerColumnaServiciosDescSFila);

          $('#segundaColumnaServiciosTituloSFila').text(data.menu.segundaColumnaServiciosTituloSFila);
          $('#segundaColumnaServiciosDescSFila').text(data.menu.segundaColumnaServiciosDescSFila);

          $('#primerColumnaServiciosTituloTFila').text(data.menu.primerColumnaServiciosTituloTFila);
          $('#primerColumnaServiciosDescTFila').text(data.menu.primerColumnaServiciosDescTFila);

          $('#segundaColumnaServiciosTituloTFila').text(data.menu.segundaColumnaServiciosTituloTFila);
          $('#segundaColumnaServiciosDescTFila').text(data.menu.segundaColumnaServiciosDescTFila);
          
          // ----------------| Sección de Servicios Movil |----------------
          
          $('#primerSeccionTituloMovil').text(data.menu.primerSeccionTituloMovil);
          $('#primerSeccionSubTituloMovil').text(data.menu.primerSeccionSubTituloMovil);
          $('#primerSeccionDescTituloMovil').text(data.menu.primerSeccionDescTituloMovil);
          $('#tituloServiciosSeccionMavilUno').text(data.menu.tituloServiciosSeccionMavilUno);
          $('#tituloServiciosSeccionMavilDos').text(data.menu.tituloServiciosSeccionMavilDos);

          // ----------------| Segunda Sección de Servicios Movil |----------------
          $('#segundaSeccionTituloMovil').text(data.menu.segundaSeccionTituloMovil);
          $('#segundaSeccionSubTituloMovil').text(data.menu.segundaSeccionSubTituloMovil);
          $('#segundaSeccionDescTituloMovil').text(data.menu.segundaSeccionDescTituloMovil);
          // ----------------| FIN Segunda Sección de Servicios Movil |----------------

          
          // ----------------| FIN Sección de Servicios Movil |----------------

          // ----------------| Sección de Barcos |----------------
          $('#titulSeccionBarcos').text(data.menu.titulSeccionBarcos);
          $('#descSeccionBarcos').text(data.menu.descSeccionBarcos);

          $('#segundoTitulSeccionBarcos').text(data.menu.segundoTitulSeccionBarcos);
          $('#segundaDescSeccionBarcos').text(data.menu.descSeccionBarcos);
          // ----------------| FIN Sección de Barcos |----------------
          
          
          // ----------------| Sección de Carrusel |----------------
          
          $('#primerTituloSeccionCarrusel').text(data.menu.primerTituloSeccionCarrusel);
          $('#primerDescSeccionCarrusel').text(data.menu.primerDescSeccionCarrusel);

          // ----------------| FIN Sección de Carrusel |----------------


          // ----------------| Sección de Footer |----------------
          
          $('#primerTituloSeccionContacto').text(data.menu.primerTituloSeccionContacto);
          $('#primerDescSeccionContacto').text(data.menu.primerDescSeccionContacto);
          $('#segundaDescSeccionContacto').text(data.menu.segundaDescSeccionContacto);
          $('#seccionContactoMobileTitulo').text(data.menu.seccionContactoMobileTitulo);
          $('#seccionContactonesDescMobil').text(data.menu.seccionContactonesDescMobil);
          $('#seccionContactoMobileDesc').text(data.menu.seccionContactoMobileDesc);
          $('#botonContactanos').text(data.menu.botonContactanos);
          $('#botonSeccionContactoMobil').text(data.menu.botonSeccionContactoMobil);

          // ----------------| FIN Sección de Carrusel |----------------
    }).fail(function(){
      console.error('No se pudo cargar el archivo JSON.');

    })
  });
});