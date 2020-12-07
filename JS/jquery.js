$(document).ready(function () {


 // $ == document.getelementbyID/Classa
    $('.submit').click(function () {

        if (!$('#ime').val() || !($('#godine')).val() || !($('#grad')).val() || !($('#adresa')).val() ) {

            alert('Molimo vas da popunite sva polja kako bi Deda Mraz mogao da vas poseti :)');
            //neko polje je prazno

        }  

        else if (($('#ime').val() || ($('#godine')).val() || ($('#grad')).val() || ($('#adresa')).val()) && !($('#zelja')).val()) {

            alert('Poslali ste prazno pismo! :) Slobodno pošaljite novo sa istim podacima :) ');
            //sve je popunjeno 

        }

        else if ($('#andjeo').is(':checked')) {
            alert("Nastavi da budes mali andjelko, Deda Mraz je ponosan na tebe :) Tvoje pismo je uspešno poslato Deda Mrazu na SEVERNI POL");
        }


        else if ($('#dobar').is(':checked')) {

            alert("Ma veruj mi ti si pravi andjeo, Deda Mraz je ponasan na tvoju skromnost :) Tvoje pismo je uspšesno poslato Deda Mrazu na SEVERNI POL Ho-ho-ho");
        }

        else if ($('#nevaljao').is(':checked')) {

            alert("Ho-Ho-Ho , nasmejali ste Deda Mraza, ne brinite i vas će posetiti Deda Mraz :) Tvoje pismo je uspešno poslato Deda Mrazu na SEVERNI POL");
        }




    });

    $('#andjeo').click(function () {

        $('.submit').attr("disabled", false);


    });

    $('#dobar').click(function () {

        $('.submit').attr("disabled", false);


    });

    $('#nevaljao').click(function () {

        $('.submit').attr("disabled", false);


    });


    //--------------------

   $('#ime').focus(function(){

        $('#ime').css("border","none");

   }) 

   $('#godine').focus(function(){

    $('#godine').css("border","none");

}) 

$('#adresa').focus(function(){

    $('#adresa').css("border","none");

}) 


$('#grad').focus(function(){

    $('#grad').css("border","none");

}) 

$('#zelja').focus(function(){

    $('#zelja').css("border","none");

}) 


$('.close').click(function(){

    $('.welcome').hide();

})









});