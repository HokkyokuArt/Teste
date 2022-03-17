$('.click-scroll').click(function () {
    $('html, body').animate({
        scrollTop: $("#teste").offset().top
        }, 2000); // Tempo em ms que a animação irá durar
});
