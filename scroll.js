$(".menu a").on("click", function (e) {
  e.preventDefault();
  const hash = this.hash;
  if (this.hash !== "") {
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 80,
      },
      800
    );
    console.log("its been clicked: ", hash);
  }
});
