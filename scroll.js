// const burger = document.querySelector(".burger-menu");
// const menu = document.querySelector(".menu");
// const links = document.querySelectorAll('.menu a');

$('.menu a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800)
    }

})



// function linksClick() {

//     for (let link of links) {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             menu.classList.remove("show-menu");
//             burger.classList.remove('show-menu')


//         })
//     }
// }
// linksClick();