  $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
      $('.datepicker').pickadate();
    });
      // funcion para el mensaje
  var publicarMensaje=document.getElementById('publicaMensaje');
  publicarMensaje.addEventListener("click",enviarComentario);
  function enviarComentario(){
    var tituloComentario=document.getElementById('tituloMensaje').value;
    var comentario=document.getElementById('mensaje').value;
    var titulodelmensaje=document.getElementById("titulomensaje");
    var contenido=document.getElementById("parrafomensaje");
    console.log(titulodelmensaje);
    console.log(contenido);
    titulodelmensaje.innerHTML=tituloComentario;
    contenido.innerHTML=comentario;
  }
  // funcion para la imagen
  var publicarImagen=document.getElementById('publicaImagen');
  publicaImagen.addEventListener("click",enviarImagen);
  var titulo2=document.getElementById("titulodelaimagen");
  function enviarImagen(){
    var tituloImagen=document.getElementById('tituloDeImagen').value;
    titulo2.innerHTML=tituloImagen;
  }
  function comenzar(){
    var zonadatos=document.getElementById('zonadatos');
    var archivos=document.getElementById("archivos");
    archivos.addEventListener("change",procesar,false);
  }
  function procesar(e){
    var archivos=e.target.files;
    zonadatos.innerHTML="";
    var mi_archivo=archivos[0];
    if(!mi_archivo.type.match(/image/)){
      alert("selecciona una imagen por favor");
    }else{
      zonadatos.innerHTML+="Nombre del archivo: "+mi_archivo.name+"<br>";
      zonadatos.innerHTML+="Tamaño del archivo: "+mi_archivo.size+"bytes <br>";
  }
  var lector=new FileReader();
  lector.readAsDataURL(mi_archivo);
  lector.addEventListener("load",mostrar_en_web, false);
  }
  function mostrar_en_web(e){
    var resultado=e.target.result;
    zonadatos.innerHTML+="<img src='"+resultado+ "'>";
  }
  window.addEventListener("load",comenzar,false);
  // funcion del mapa
  var boton=document.getElementById("cargaMapa");
  boton.addEventListener("click",findMe);
  function findMe(){
    var salida=document.getElementById('map');
    var titulodelevento=document.getElementById("tituloEvento").value;
    var fecha=document.getElementById("fechaEvento").value;
    var titulo=document.getElementById("titulomapa");
    var date=document.getElementById("fechas");
    console.log(titulodelevento);
    console.log(fecha);
  function localizacion(posicion){
    titulo.innerHTML=titulodelevento;
    console.log(titulo);
    date.innerHTML=fecha;
    var latitude=posicion.coords.latitude;
    var longitude=posicion.coords.longitude;
    var imgURL="https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&Key=AIzaSyD0SBG5F97yON9GcTOwudBMILlgKv4uTds";
    salida.innerHTML="<img src='"+imgURL+"'>";
  }
    navigator.geolocation.getCurrentPosition(localizacion);
  }
