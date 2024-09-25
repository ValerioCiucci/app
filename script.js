
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

$(".n").hide();
$('canvas').hide()

var mouse = true;



function accarezza() {


  if (mouse == true) {

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

  }


}

$(".d").hide().fadeIn(200)
$(".d").children().t("HO VOGLIA DI UN BUBBLE TEA")
$("audio").hide()
var audio = $("audio")[0];
audio.volume = 0.2;
var timeout = [];


const container = $('.particle');

const container1 = $('.gatto');

function createParticle(x, y) {


  const particle = $('<div class="particle"></div>');
  container1.append(particle);


  particle.css({
    left: x + 'px',
    top: y + 'px',
    opacity: 1
  });


  setTimeout(() => {
    particle.css('opacity', '0');
    setTimeout(() => {
      particle.remove();
    }, 200);
  }, 100);
}

$(".gatto img").on('mousemove', function (e) {
  createParticle(e.pageX, e.pageY);
});

let i = 0


$(".gatto img").on('touchmove', function (event) {
  const touch = event.touches[0];
  container.css({
    left: touch.pageX + 'px',
    top: touch.pageY + 'px'
  });
});

$(".gatto img").on('touchstart', function (e) {

  if (mouse == true) {
    const touch = e.touches[0];
    container.css({
      left: touch.pageX + 'px',
      top: touch.pageY + 'px',
      opacity: 1
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

  }
});


$(".gatto img").on('touchend', function (e) {

  if(mouse==true){
  container.css('opacity', '0'); // Nasconde il pallino

  timeout.push(setTimeout(function () {


    $(".gatto img").attr('src', `img/gatto.gif`)

    $(".d").children().t_off(true)
    $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA")



  }, 5000))

  clearInterval(i);

}
});


if(mouse==true){
$(".gatto img").on('mouseenter', accarezza)
}



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


$(`.box[pid='4']`).click(function () {
mouse=false;

  if (timeout.length > 0) {

    for (i = 0; i < timeout.length; i++) {

      clearTimeout(timeout[i])



    }

  }



  $(".d").children().t_off(true)

  $(".gatto img").attr('src', `img/triste2.gif`)


  $(".d").children().t("HO CAPITO ME LEVO DAL CAZZO")

  $(".gatto img").fadeOut(5000);
  $(".d").fadeOut(5000);
  $(".box").hide(5000);

  timeout.push(setTimeout(function () {
    $(".n").toggle(1000)
  }, 5000
  )
  )





})




$(`.box[pid='5']`).click(function () {
mouse=true;

  if (timeout.length > 0) {

    for (i = 0; i < timeout.length; i++) {

      clearTimeout(timeout[i])



    }


    $(".n").toggle(100)




    $(".gatto img").fadeIn(3000);
    $(".d").fadeIn(3000);
    $(".box").not(".n").show(1000);
    $(".gatto img").attr('src', `img/arrabbiato2.gif`)
    $(".d").children().t("E MO CHE VOI")


  }





})



$(document).ready(function() {
    const $canvas = $('canvas')[0]; // Otteniamo il canvas

    const ctx = $canvas.getContext('2d');

    // Variabile per sapere se il disegno è attivato
    let drawingEnabled = false;

    // Funzione per disegnare
    function draw(x, y) {
        ctx.fillStyle = 'blue';
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;

        // Disegna un cerchio
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    // Funzione per abilitare il disegno
    function enableDrawing() {
      $('canvas').show();
        drawingEnabled = true;
    }

    // Gestire il click del bottone
    $('.box[pid=6]').on('click', enableDrawing);

    // Gestire il disegno con il mouse
    $canvas.addEventListener('mousedown', function(e) {
     

    $canvas.addEventListener('mousemove', function(e) {
        if (drawingEnabled) {
            const rect = $canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            draw(x, y);
        }
    });
  });

  $canvas.addEventListener('mouseup', function(e) {
    drawingEnabled=false;
  });



    // Gestire il disegno con il touch
    $canvas.addEventListener('touchmove', function(e) {
        if (drawingEnabled) {
            e.preventDefault(); // Previene lo scorrimento della pagina
            const rect = $canvas.getBoundingClientRect();
            const touch = e.touches[0];
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            draw(x, y);
        }
    });

    // Opzionale: disabilitare il disegno quando si tocca il canvas
    $canvas.addEventListener('touchend', function() {
        drawingEnabled = false;
    });
});
// $("img").attr("src","img/accarezza.gif")
// $("img").attr("width","200")
// $("img").attr("height","200")
// $(".d").attr("margin-left","200px")













