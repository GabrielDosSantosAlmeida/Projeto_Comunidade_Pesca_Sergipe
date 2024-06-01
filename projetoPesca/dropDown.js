$(document).ready(function() {
    var botao = $('.open-dropdown');
    var dropDown = $('.dropdown-menu');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });