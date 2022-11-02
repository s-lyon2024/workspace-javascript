// try jQuery 

$(function(){   // document.ready

    $('a').each(function(){
        $(this).css("text-decoration", "line-through");
        $(this).attr('href', "https://www.ecosia.org/");
    });

    $('img').each(function(){
        $(this).attr('src', "img/" + src.textContent());
    });
});