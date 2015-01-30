$(document).ready(function(){
    var $menuA = $("#iconedumenu");
    var $contenusite = $("#contenu-site");

    $('#iconedumenu').click(function(e){
        e.preventDefault();
        $('body').toggleClass('responsive');
    })
    $('#siteacacher').click(function(e){
            $('body').removeClass('responsive');
        })

/*

    $menuA.click(function(){
        toggleNav();
    });
    $('#menunav').click(function(e) {
        toggleNav();
        e.preventDefault();
        return false;
    });

    $contenusite.click(function(){
        if ($('#contenu-site').hasClass('response')) {
            $('#contenu-site').removeClass('response');
        }
    });
*/
});

/*
function toggleNav() {
    if ($('#contenu-site').hasClass('response')) {
        // Do things on Nav Close
        alert("niquel");
        $('#contenu-site').removeClass('response');
    } else {
        // Do things on Nav Open
        alert("boff");
        $('#contenu-site').addClass('response');
    }

    //$('#site-wrapper').toggleClass('response');
}

*/