$('.menu a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash
        $('html, body').animate({
            scrollTop: $(hash).offset().top - $('nav').outerHeight()
        }, 800)
    }

})