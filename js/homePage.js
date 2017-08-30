
$('#IdRecomiendanos').hide();
$('#idoilcol').hide();
$('#idsgh').hide();
$('#idpuerto').hide();


$(document).ready(function(){ 
   $('#recoboton').on('click',function(){
      $('#IdRecomiendanos').toggle();
   });
});

$(document).ready(function(){ 
   $('#oilboton').on('click',function(){
      $('#idoilcol').toggle();
   });
});
$(document).ready(function(){ 
   $('#sghboton').on('click',function(){
      $('#idsgh').toggle();
   });
});
$(document).ready(function(){ 
   $('#puboton').on('click',function(){
      $('#idpuerto').toggle();
   });
});