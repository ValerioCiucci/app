
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function (registration) {
        console.log('Service Worker registrato con successo:', registration);
      })
      .catch(function (error) {
        console.log('Service Worker registrazione fallita:', error);
      });
  });
}





$(".d").hide().fadeIn(200)
$(".d").children().t("HO VOGLIA DI UN BUBBLE TEA")
$("audio").hide()
var audio = $("audio")[0];
audio.volume = 0.2;
var timeout = [];


const container = $('.particle');



// function createParticle(x, y) {
//   const particle = $('<div class="particle"></div>');
//   container.append(particle);


//   particle.css({
//     left: x + 'px',
//     top: y + 'px',
//     opacity: 1
//   });


//   setTimeout(() => {
//     particle.css('opacity', '0');
//     setTimeout(() => {
//       particle.remove();
//     }, 200);
//   }, 100);
// }

$(".gatto img").on('mousemove', function (e) {
  createParticle(e.pageX, e.pageY);
});

let i = 0


$(".gatto img").on('touchmove', function(event) {
  const touch = event.touches[0]; // Prendi il primo tocco
  container.css({
      left: touch.pageX + 'px',
      top: touch.pageY + 'px'
  });
});

$(".gatto img").on('touchstart', function (e) {
  const touch = e.touches[0]; // Prendi il primo tocco
        container.css({
            left: touch.pageX + 'px',
            top: touch.pageY + 'px',
            opacity: 1 // Mostra il pallino
        });

  if (timeout.length > 0) {

    for (i = 0; i < timeout.length; i++) {

      clearTimeout(timeout[i])



    }

  }



  $(".d").children().t_off(true)

  $(".gatto img").attr('src', `img/accarezza.gif`)


  $(".d").children().t("SMETTILA DI ACCAREZZARMI")



  i = setInterval(() => {

    createParticle(e.pageX, e.pageY);
  }, 100);
});


$(".gatto img").on('touchend', function (e) {
    container.css('opacity', '0'); // Nasconde il pallino

  timeout.push(setTimeout(function () {


    $(".gatto img").attr('src', `img/gatto.gif`)

    $(".d").children().t_off(true)
    $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA")



  }, 5000))

  clearInterval(i);
});



$(".gatto img").on('mouseenter', function () {



  if (timeout.length > 0) {

    for (i = 0; i < timeout.length; i++) {

      clearTimeout(timeout[i])



    }

  }



  $(".d").children().t_off(true)

  $(".gatto img").attr('src', `img/accarezza.gif`)


  $(".d").children().t("SMETTILA DI ACCAREZZARMI")



  timeout.push(setTimeout(function () {


    $(".gatto img").attr('src', `img/gatto.gif`)

    $(".d").children().t_off(true)
    $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA")



  }, 5000))

})




$(`.box[pid='1']`).click(function () {
  if (timeout.length > 0) {

    for (i = 0; i < timeout.length; i++) {

      clearTimeout(timeout[i])



    }

  }

  $(".d").children().t_off(true)

  $(".gatto img").attr('src', `img/love.gif`)


  $(".d").children().t("GRAZIEEEE")



  timeout.push(setTimeout(function () {


    $(".gatto img").attr('src', `img/beve.gif`)

    $(".d").children().t_off(true)
    $(".d").children().t("GLU GLU GLU")


    setTimeout(function () {


      $(".gatto img").attr('src', `img/gatto.gif`)

      $(".d").children().t_off(true)
      $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA")



    }, 5000)

  }, 5000))


})


$(`.box[pid='2']`).click(function () {

  if (timeout.length > 0) {

    for (i = 0; i < timeout.length; i++) {

      clearTimeout(timeout[i])



    }

  }


  $(".d").children().t_off(true)

  $(".gatto img").attr('src', `img/arrabbiato.gif`)


  $(".d").children().t("SEI UNO STRONZOO!")



  timeout.push(setTimeout(function () {

    $(".gatto img").attr('src', `img/gatto.gif`)

    $(".d").children().t_off(true)
    $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA")


  }, 5000))


})

$(`.box[pid='3']`).click(function () {

  if (timeout.length > 0) {

    for (i = 0; i < timeout.length; i++) {

      clearTimeout(timeout[i])



    }

  }


  $(".d").children().t_off(true)

  $(".gatto img").attr('src', `img/triste.gif`)


  $(".d").children().t("NON ESSERE TRISTEE, O LO SARO' ANCH'IO")



  timeout.push(setTimeout(function () {

    $(".gatto img").attr('src', `img/gatto.gif`)

    $(".d").children().t_off(true)
    $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA")


  }, 5000))


})


$("img[pid='1']").click(function () {

  if ($("img[pid='1']").attr("src") == "img/muted.png") {
    $("img[pid='1']").attr("src", "img/sound.png")
    $("img[pid='1']").attr("width", "+=50px")
    audio.play();

  }

  else {

    $("img[pid='1']").attr("src", "img/muted.png")
    $("img[pid='1']").attr("width", "-=50px")
    audio.pause();
  }



})
// $("img").attr("src","img/accarezza.gif")
// $("img").attr("width","200")
// $("img").attr("height","200")
// $(".d").attr("margin-left","200px")













