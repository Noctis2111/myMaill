// compteur de message present au chargement de la page 

var compteur = 0;


$(".row").each(function(){
    
    compteur = $('p').length - 1;
    
})

$('#count').text(compteur);
console.log(compteur);

// gestion des evenement de suppression des message existant 

$('.trash').each(function(){
    $(this).click(function(){
        console.log("click detecter");
        $(this).parent().remove();
        compteur--;
        $('#count').text(compteur);
    })
})


// barre et bouton d'ajout de message sue la page avec fonction de suppresion
//et mis a jour du compteur de message 
$('.btn-blue').click(function(){
    
    console.log("click detecter");
    var message = $('#addmessage').val();
    console.log(message);
    
    $('body').append(`<div class='row'>
       <img class='avatar' src='Assets/avatar-1.jpg' alt='premier avatar'>
       <div>
           <h6>Romain D'Agate</h6>
            <p>${message}</p>
       </div>
        <img class='trash' src='Assets/trash.png' alt='poubelle'>\
    </div>`)
    
    compteur++;
    $('#count').text(compteur);
    $('#addmessage').val("");
    
    
    $('.trash').each(function(){
    
        $(this).click(function(){
            console.log("click detecter");
            $(this).parent().remove();
            compteur--;
            $('#count').text(compteur);
        })
    })  
    
})



// barre et bouton de recherche de message existant

$('.btn-search').click(function(){
    
    var nom = $('#recherche').val();
    $(".row").show();

    $('h6').each(function(){
        
        if ($(this).text() != nom && nom.length > 0) {
            
            $(this).parents('.row').hide(); //remonte a la class '.row' et cache les element 
           
        }
    })
   /* if (nom == ""){
        $(".row").show();
    }
      */  
    $('#recherche').val("");
    
    
})


