//almacenar slider en una variable
var slider1 = $('#slider');
// almacenar los botones
var siguiente=$('btn-next');
var anterior=$('btn-prev');
// mover ultima seccion a primera
$('#slider section:last').insertBefore('#slider section:first');
//desplazar la segunda imagen
slider1.css('margin-left', '-'+100+'%');

function moverD()
{
    slider1.animate({marginLeft:'-'+200+'%'},700,function()
         {
            $('#slider section:first').insertAfter('#slider section:last');
            slider1.css('margin-left', '-'+100+'%');
         });
};
function moverI()
{
    slider1.animate({marginLeft:0},700,function()
         {
            $('#slider section:last').insertBefore('#slider section:first');
            slider1.css('margin-left', '-'+100+'%');

         });
}

function autoslider()
{
    invertal = setInterval(function(){moverD();},3000);
}
function pausar()
{
   
    clearInterval(invertal);
}
function continuar()
{
    autoslider();
}
autoslider();

/*
var siguiente2=$('btn-next2');
var anterior2=$('btn-prev2');

//almacenar slider en una variable
// almacenar los botones

// mover ultima seccion a primera



//desplazar la segunda imagen

*/
 var ere = $('#slider2' );


$('#slider2 section:last').insertBefore('#slider2 section:first');
ere.css('margin-left', '-'+33.33+'%');

function moverD2()
{
    ere.animate({marginLeft:'-'+33.33+'%'},0,function()
         {
            $('#slider2 section:first').insertAfter('#slider2 section:last');
            ere.css('margin-left', '-'+33.33+'%');
         });
};

function moverI2()
{
    ere.animate({marginLeft:0 +"px"},0,function()
         {
            $('#slider2 section:last').insertBefore('#slider2 section:first');
            ere.css('margin-left', '-'+33.33+'%');

         });
}

