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

var playingAudio = []
var imagesData = [];
var imagesData1 = [];
var imagePositions = []

var imageDimensions = []

var imgWidth, imgHeight;
var dragOffsetX = 0;
var dragOffsetY = 0;
var lines = []
var background;

function drawAllLines() {
  lines.forEach(line => {

    ctx.globalCompositeOperation = line.pen_gum;
    ctx.beginPath();
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(line.endX, line.endY);
    ctx.strokeStyle = line.color;
    ctx.lineWidth = line.lineWidth;
    ctx.stroke();
  });
  ctx.globalCompositeOperation = 'source-over';
}

function Line(startX, startY, endX, endY, color, lineWidth, gumorpen) {
  this.startX = startX;
  this.startY = startY;
  this.endX = endX;
  this.endY = endY;
  this.color = color;
  this.lineWidth = lineWidth;
  this.pen_gum = gumorpen;
}
function stopAudio() {

  for (let i = 0; i < playingAudio.length; i++) {

    playingAudio[i].pause()



  }


}




window.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, { passive: false });

document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
  e.stopPropagation();
});
var thickness = 5;
$(".main").hide()




$(".n").hide();
$('canvas').hide();
var activatedButton = false;
var mouse = true;
let lastX = 0;
let lastY = 0;
var timeout = [];


var audio = $("audio")[0];
audio.volume = 0.2;

$("img[pid='0']").click(function () {
  $(".start").hide(0)
  $(".main").show(0)
  $("audio")[3].play()

})

function clearTimeouts() {
  if (timeout.length > 0) {
    for (let i = 0; i < timeout.length; i++) {
      clearTimeout(timeout[i]);
    }
    timeout = [];
  }
}

function accarezza() {
  stopAudio()
  playingAudio.push($('audio')[2])
  playingAudio[playingAudio.length - 1].play()

  if (mouse) {
    clearTimeouts();
    $(".d").children().t_off(true);
    $(".gatto img").attr('src', `img/accarezza.gif`);
    $(".d").children().t("SMETTILA DI ACCAREZZARMI");

    timeout.push(setTimeout(function () {
      $(".gatto img").attr('src', `img/gatto.gif`);
      $(".d").children().t_off(true);
      $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
    }, 5000));
  }
}

$(".d").hide().fadeIn(200);
$(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
$("audio").hide();

function createParticle(x, y) {
  const particle = $('<div class="particle"></div>');
  $('.gatto').append(particle);
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

$(".gatto img").on('touchmove', function (event) {
  const touch = event.touches[0];
  $('.particle').css({
    left: touch.pageX + 'px',
    top: touch.pageY + 'px'
  });
});
$(".gatto img").click(function () {



})
$(".gatto img").on('touchstart', function (e) {

  if (mouse) {
    stopAudio()
    const touch = e.touches[0];
    createParticle(touch.pageX, touch.pageY);
    clearTimeouts();
    $(".d").children().t_off(true);
    $(".gatto img").attr('src', `img/accarezza.gif`);
    $(".d").children().t("SMETTILA DI ACCAREZZARMI");
    playingAudio.push($('audio')[2])
    playingAudio[playingAudio.length - 1].play()

    let i = setInterval(() => {
      createParticle(touch.pageX, touch.pageY);
    }, 100);
    $(this).data("intervalId", i);
  }
});

$(".gatto img").on('touchend', function () {
  if (mouse) {

    $('.particle').css('opacity', '0');
    timeout.push(setTimeout(function () {
      $(".gatto img").attr('src', `img/gatto.gif`);
      $(".d").children().t_off(true);
      $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
      stopAudio()
    }, 5000));

    clearInterval($(this).data("intervalId"));
  }
});

if (mouse) {
  $(".gatto img").on('mouseenter', accarezza);
}

$(`.box[pid='3']`).click(function () {

  stopAudio()

  if (mouse) {
    clearTimeouts();
    $(".d").children().t_off(true);
    $(".gatto img").attr('src', `img/triste.gif`);
    $(".d").children().t("NON ESSERE TRISTE, O LO SARO' ANCH'IO");

    timeout.push(setTimeout(function () {
      $(".gatto img").attr('src', `img/gatto.gif`);
      $(".d").children().t_off(true);
      $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
    }, 5000));
  }
});

let isRunning = false;
$(`.box[pid='4']`).click(function () {
  stopAudio()

  mouse = false;
  if (isRunning) return;

  isRunning = true;
  clearTimeouts();
  $(".d").children().t_off(true);
  $(".gatto img").attr('src', `img/triste2.gif`);
  $(".d").children().t("HO CAPITO ME NE VADO");

  $(".gatto img").fadeOut(3000, function () {
    $(".d").fadeOut(100);
    $(".box").hide(1000);
    timeout.push(setTimeout(function () {


      $(".n").toggle(1000);
      enableDrawing()
      isRunning = false;
    }, 1000));
  });

});




$(`.box[pid='1']`).click(function () {
  stopAudio()

  if (mouse) {
    clearTimeouts();
    $(".d").children().t_off(true);
    $(".gatto img").attr('src', `img/love.gif`);
    $(".d").children().t("GRAZIEEEE");

    timeout.push(setTimeout(function () {
      $(".gatto img").attr('src', `img/beve.gif`);
      $(".d").children().t_off(true);
      $(".d").children().t("GLU GLU GLU");
      let i = 0;
      playingAudio.push($('audio')[1])
      playingAudio[playingAudio.length - 1].play()






      timeout.push(
        setTimeout(function () {
          $(".gatto img").attr('src', `img/gatto.gif`);
          $(".d").children().t_off(true);
          $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
        }, 4000));
    }, 4000));
  }
});

$(`.box[pid='2']`).click(function () {
  stopAudio()

  if (mouse) {
    clearTimeouts();
    $(".d").children().t_off(true);
    $(".gatto img").attr('src', `img/arrabbiato.gif`);
    $(".d").children().t("SEI CATTIVOO!");

    timeout.push(setTimeout(function () {
      $(".gatto img").attr('src', `img/gatto.gif`);
      $(".d").children().t_off(true);
      $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
    }, 5000));
  }
});

var drawingEnabled = false;
const $canvas = $('canvas')[0];
const ctx = $canvas.getContext('2d');
let color = $("input")[1].value;
let firstTouch = false;
let back = []
let forward = [];

var draggingImg = false;



function draw(x, y) {
  if (!draggingImg) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';

    if (firstTouch) {
      ctx.moveTo(x, y);
      firstTouch = false;
    } else {
      ctx.lineTo(x, y);

      lines.push(new Line(lastX, lastY, x, y, color, thickness, ctx.globalCompositeOperation));
    }

  }


  ctx.stroke();
  lastX = x;
  lastY = y;

}

function enableDrawing() {
  ctx.globalCompositeOperation = 'source-over';

  draggingImg = false;
  ctx.beginPath();
  color = $("input")[1].value;
  $('canvas').show();
  drawingEnabled = true;
}

$(".box[pid=6]").on('click', enableDrawing);


$canvas.addEventListener('mousedown', function (e) {
  back.push(ctx.getImageData(0, 0, $canvas.width, $canvas.height));

  firstTouch = true;
  let draw1 = true;

  const rect = $canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (drawingEnabled) {
    draw(x, y)
  }


  $canvas.addEventListener('mousemove', function (e) {
    if (draw1) {
      const rect = $canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      draw(x, y);
    }
  });

  $canvas.addEventListener('mouseup', function () {
    draw1 = false;



  }, { once: true });
});

$canvas.addEventListener('touchstart', function (e) {
  back.push(ctx.getImageData(0, 0, $canvas.width, $canvas.height));
  firstTouch = true;
  let draw1 = true;

  const rect = $canvas.getBoundingClientRect();
  const touch = e.touches[0];
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  draw(x, y);

  $canvas.addEventListener('touchmove', function (e) {

    if (draw1) {
      e.preventDefault();
      const rect = $canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      draw(x, y);
    }
  });

  $canvas.addEventListener('touchend', function () {
    draw1 = false;


  }, { once: true });
});


//cestino
$(`.box[pid='8']`).click(function () {


  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  ctx.beginPath();
  imagesData1 = []
  imagePositions = []
  imageDimensions = []
  dragOffsetX = 0
  dragOffsetY = 0
  lines = []
  if (typeof background === "string") {
    ctx.fillStyle = background;



    ctx.fillRect(0, 0, $canvas.width, $canvas.height);


  }
  else {


    context.drawImage(background, 0, 0, $canvas.width, $canvas.height);


  }






});

//freccia indietro
$(`.box[pid='11']`).click(function () {
  forward.push(ctx.getImageData(0, 0, $canvas.width, $canvas.height));


  ctx.putImageData(back[back.length - 1], 0, 0);
  back.pop()

  ctx.beginPath()

});
//freccia avanti
$(`.box[pid='12']`).click(function () {
  back.push(ctx.getImageData(0, 0, $canvas.width, $canvas.height));


  ctx.putImageData(forward[forward.length - 1], 0, 0);
  forward.pop()
  ctx.beginPath()

});
//gomma
$(`.box[pid='7']`).click(function () {

  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
});

$(`.box[pid='5']`).click(function () {



  mouse = true;
  imagesData1 = [];
  imagePositions = [];
  imageDimensions = [];
  lines = []; // Resetta le linee

  dragOffsetX = 0;
  dragOffsetY = 0;
  


  if (activatedButton) {

    $('.box').css('transform', 'scale(1.0)');
    $(".box[pid='9'").addClass('m-t')
    $(".box[pid='10'").addClass('m-t')
    $(".box[pid='11'").addClass('m-t')
    $(".box[pid='12'").addClass('m-t')
    $(".box[pid='5'").addClass('m-t')


    $('html').get(0).style.cssText = backupStyle.html;
    $('body').get(0).style.cssText = backupStyle.body;
    $('.selezione').get(0).style.cssText = backupStyle.selezione;
    $('canvas').get(0).style.cssText = backupStyle.canvas;
    $('.gatto').get(0).style.cssText = backupStyle.gatto;
    $('.main').get(0).style.cssText = backupStyle.main;
    $('.main').append($("img[pid='1']"))
    $("img[pid='1']").get(0).style.cssText = backupStyle.img
    $("img[pid='1']").attr('height', '100px')
    $("img[pid='1']").attr('width', '100px')

    $(".main").show(0)
    $('.bar').remove()


    $(".box[pid='98']").remove()
    $(".box[pid='199']").remove()
    $(".box[pid='100']").remove()
    $(".box[pid='101']").remove()



    $canvas.width = 200;
    $canvas.height = 200;

    $('.selezione .box').on('mousedown touchstart', function () {
      $(this).css('transform', 'scale(1.2)');
    });

    $('.selezione .box').on('mouseup touchend', function () {
      $(this).css('transform', 'scale(1.0)');
    });

    $(`.box[pid='14']`).remove();


    flag1 = false;
    activatedButton = false;


    $("div[pid='200']").remove();
    $("div[pid='201']").remove();
    
  }
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  $("input")[1].value = 'black';
  $('canvas').hide();
  clearTimeouts();

  $(".n").toggle(100);
  $(".gatto img").fadeIn(3000);
  $(".d").fadeIn(3000);
  $(".box").not(".n").show(1000);
  $(".gatto img").attr('src', `img/arrabbiato2.gif`);
  $(".d").children().t("E MO CHE VOI");
  $(".box[pid='10']").hide()

});

$("img[pid='1']").click(function () {
  if ($("img[pid='1']").attr("src") == "img/muted.png") {
    $("img[pid='1']").attr("src", "img/sound.png");
    $("img[pid='1']").attr("width", "+=50px");
    audio.play();
  } else {
    $("img[pid='1']").attr("src", "img/muted.png");
    $("img[pid='1']").attr("width", "-=50px");
    audio.pause();
  }
});

$('input').on('input', function () {
  color = $("input")[1].value;

  ctx.beginPath();
});
$('.box').on('mousedown touchstart', function () {
  $(this).addClass('active');
});

$('.box').on('mouseup touchend', function () {
  $(this).removeClass('active');
});
var cont = 0;

$(".box[pid='13']").click(function () {

  ctx.beginPath()

  if (cont < 4) {



    if (cont == 0) {
      $(".box[pid='13'] img").attr('height', '30px').attr('width', '30px')
      thickness += 3
    } else
      if (cont == 1) {
        thickness += 3
        $(".box[pid='13'] img").attr('height', '50px').attr('width', '50px')

      }
    if (cont == 2) {
      thickness += 5
      $(".box[pid='13'] img").attr('height', '70px').attr('width', '70px')

    }
    if (cont == 3) {
      thickness += 5
      $(".box[pid='13'] img").attr('height', '80px').attr('width', '80px')

    }

    cont += 1;
  }
  else {
    cont = 0;
    thickness = 5;
    $(".box[pid='13'] img").attr('height', '10px').attr('width', '10px')

  }



});
let backupStyle = {
  img: $("img[pid='1'").get(0).style.cssText,
  html: $('html').get(0).style.cssText,
  body: $('body').get(0).style.cssText,
  selezione: $('.selezione').get(0).style.cssText,
  canvas: $('canvas').get(0).style.cssText,
  gatto: $('.gatto').get(0).style.cssText,
  main: $('.main').get(0).style.cssText
};

let flag1 = false;
//fullscreen
$(`.box[pid='10']`).click(function () {
  $(".box[pid='10']").hide();
  imagesData1 = [];
  imagePositions = [];
  imageDimensions = [];
  lines = []; // Resetta le linee

  dragOffsetX = 0;
  dragOffsetY = 0;
  if (!flag1) {
    //pulsante sfondo


    $('.selezione').append(
      $('<div>')
        .css('display', 'flex')
        .attr('pid','200')

        .append(
          $('<div>')
            .addClass('box')
            .addClass('n')
            .attr('pid', '199')
            .text('Sfondo'))
        .append(
          $('<div>')
            .addClass('box')
            .addClass('n')
            .attr('pid', '100')
            .css('display', 'none')
            .addClass('bar1')
            .append($('<input>')
              .attr('type', 'color')
              .attr('id', 'colorPicker')
              .attr('value', '#FFFFFF')
              .attr('pid', '54')


            )
        )
        .append(
          $('<div>')
            .addClass('box')
            .addClass('n')
            .attr('pid', '101')
            .css('display', 'none')
            .text('Carica immagine')
            .addClass('bar1')



        )
    )

    $('.selezione').append(
      $('<div>')
        .css('display', 'flex')
        .attr('pid','201')


        //pulsante strumenti

        .append(
          $('<div>')
            .addClass('box')
            .addClass('n')
            .attr('pid', '98')
            .text('TOOLS')
        ).append(
          $('<div>')
            .addClass('box')
            .addClass('n')
            .attr('pid', '15')
            .text('Carica immagine')
            .css('display', 'none')
            .addClass('bar')
        )
        .append(
          $('<div>')
            .addClass('box')
            .addClass('n')
            .attr('pid', '76')
            .text('Carica progetto')
            .css('display', 'none')
            .addClass('bar')
        )
        .append(
          $('<div>')
            .addClass('box')
            .addClass('n')
            .attr('pid', '77')
            .text('Salva progetto')
            .css('display', 'none')
            .addClass('bar')
        )

        .append(

          $('<div>').addClass('n').attr('pid', '69').append($("img[pid='1']")).css('display', 'none')
            .addClass('bar').addClass('box').css('border', '0px').addClass('noremove')








        )


    );

    //pulsante sfondo colore
    $(`.box[pid='100'] input`).on('input', function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = $(this).val()
      background = $(this).val();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawAllLines();
      for (let x = 0; x < imagesData1.length; x++) {

        if (imagesData1[x] instanceof HTMLImageElement && imagesData1[x].complete) { // Verifica se l'immagine è caricata
          context.drawImage(imagesData1[x], imagePositions[x][0], imagePositions[x][1], imageDimensions[x][0], imageDimensions[x][1]);
        }
      }

    }

    );
    let isDragging = false;


    let img = new Image();
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');


    // Sfondo immagine
    $(`.box[pid='101']`).click(function () {
      let fileInput = $('<input>').attr('type', 'file').attr('accept', 'image/*').hide();
      $('body').append(fileInput);
      fileInput.click();

      fileInput.on('change', function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
          img = new Image();
          img.src = event.target.result;

          img.onload = function () {
            // Disegna lo sfondo appena caricato
            background = img;

            // Prima cancella solo il background per evitare di rimuovere altri disegni
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Redisegna le linee e le immagini sopra il nuovo sfondo
            drawAllLines();
            drawAllImages();
          };

          fileInput.remove();
        };

        reader.readAsDataURL(file);
      });
    });

    // Funzione per disegnare tutte le immagini sopra lo sfondo
    function drawAllImages() {
      for (let x = 0; x < imagesData1.length; x++) {
        if (imagesData1[x] instanceof HTMLImageElement && imagesData1[x].complete) {
          context.drawImage(
            imagesData1[x],
            imagePositions[x][0],
            imagePositions[x][1],
            imageDimensions[x][0],
            imageDimensions[x][1]
          );
        }
      }
    }




    // Carica l'immagine tramite file input
    $(`.box[pid='15']`).click(function () {

      ctx.globalCompositeOperation = 'source-over';

      let fileInput = $('<input>').attr('type', 'file').attr('accept', 'image/*').hide();
      $('body').append(fileInput);
      fileInput.click();

      fileInput.on('change', function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
          img = new Image()
          img.src = event.target.result;

          img.onload = function () {
            // Imposta dimensioni del canvas in base all'immagine
            imagePositions.push([50, 50])


            // Memorizza larghezza e altezza dell'immagine
            imageDimensions.push([img.width, img.height]);


            imagesData1.push(img)

            // Disegna immagine iniziale
            context.drawImage(imagesData1[imagesData1.length - 1], imagePositions[imagePositions.length - 1][0], imagePositions[imagePositions.length - 1][1], imageDimensions[imageDimensions.length - 1][0], imageDimensions[imageDimensions.length - 1][1]);
          };

          fileInput.remove();
        };

        reader.readAsDataURL(file);
      });
    });

    // Funzione per spostare l'immagine
    function drawImage(nImage) {
      context.clearRect(0, 0, canvas.width, canvas.height); // Pulisce il canvas
      if (typeof background === "string") {
        ctx.fillStyle = background;



        ctx.fillRect(0, 0, canvas.width, canvas.height);


      }
      else {


        context.drawImage(background, 0, 0, canvas.width, canvas.height);


      }
      drawAllLines()


      // Disegna tutte le immagini tranne quella che stai spostando
      for (let x = 0; x < imagesData1.length; x++) {
        if (x !== nImage) {
          if (imagesData1[x] instanceof HTMLImageElement && imagesData1[x].complete) { // Verifica se l'immagine è caricata
            context.drawImage(imagesData1[x], imagePositions[x][0], imagePositions[x][1], imageDimensions[x][0], imageDimensions[x][1]);
          }
        }
      }

      // Ridisegna l'immagine spostata solo se è completamente caricata
      if (imagesData1[nImage] instanceof HTMLImageElement && imagesData1[nImage].complete) {
        context.drawImage(imagesData1[nImage], imagePositions[nImage][0], imagePositions[nImage][1], imageDimensions[nImage][0], imageDimensions[nImage][1]);
      }
    }







    function imageResize(nImage, isIncreasingX, isIncreasingY) {


      if (isIncreasingX) {

        imageDimensions[nImage][0] = imageDimensions[nImage][0] * 1.01;

      }
      else {
        imageDimensions[nImage][0] = imageDimensions[nImage][0] * 0.99;

      }

      if (isIncreasingY) {

        imageDimensions[nImage][1] = imageDimensions[nImage][1] * 1.01;

      }
      else {
        imageDimensions[nImage][1] = imageDimensions[nImage][1] * 0.99;

      }


      // pimgWidth=(imgWidth/$canvas.width)*100;
      // pimgHeight=(imgHeight/$canvas.height)*100;




      // imgWidth=((pimgWidth-distanceX)/100)*$canvas.width
      // imgHeight=((pimgHeight-distanceY)/100)*$canvas.height


      drawImage(nImage);



    }




    //funzione per spostare immagini
    var nImage = 0;
    canvas.addEventListener('touchstart', function (e) {

      const touch = e.touches[0];
      const mouseX = touch.clientX - canvas.getBoundingClientRect().left;
      const mouseY = touch.clientY - canvas.getBoundingClientRect().top;

      // Controlla se l'utente ha toccato l'immagine
      let cont = 0


      if (imagePositions.length > 0) {
        for (position of imagePositions) {


          if (mouseX >= position[0] && mouseX <= position[0] + imageDimensions[cont][0] && mouseY >= position[1] && mouseY <= position[1] + imageDimensions[cont][1]) {
            ctx.globalCompositeOperation = 'source-over';

            isDragging = true;


            draggingImg = true;
            dragOffsetX = mouseX - position[0];
            dragOffsetY = mouseY - position[1];
            nImage = cont;


          }
          cont++;


        }

        cont = 0;
        // if (mouseX >= imgX && mouseX <= imgX + imgWidth && mouseY >= imgY && mouseY <= imgY + imgHeight && imagesData1.length>0) {
        //   ctx.globalCompositeOperation = 'source-over';

        //   isDragging = true;


        //   draggingImg = true;
        //   dragOffsetX = mouseX - imgX;
        //   dragOffsetY = mouseY - imgY;
        // }
      }
    });

    canvas.addEventListener('touchmove', function (e) {
      e.preventDefault(); // Evita lo scrolling durante il trascinamento
      if (isDragging) {


        draggingImg = true;
        const touch = e.touches[0];
        const mouseX = touch.clientX - canvas.getBoundingClientRect().left;
        const mouseY = touch.clientY - canvas.getBoundingClientRect().top;

        // Aggiorna la posizione dell'immagine durante il trascinamento
        imagePositions[nImage][0] = mouseX - dragOffsetX;
        imagePositions[nImage][1] = mouseY - dragOffsetY;

        drawImage(nImage); // Ridisegna l'immagine

      }
    });

    canvas.addEventListener('touchend', function () {
      isDragging = false; // Fine del trascinamento su touch
      draggingImg = false;


    });



    //ridimensionamento immagini 

    canvas.addEventListener('touchstart', function (e) {
      var distanceX = 0;
      var distanceY = 0;
      var isResizing = false;
      var isIncreasingX = false;
      var isIncreasingY = false;
      if (e.touches.length > 1) {

        const touch = e.touches[0];
        const touch2 = e.touches[1];
        const mouseX = touch.clientX - canvas.getBoundingClientRect().left;
        const mouseY = touch.clientY - canvas.getBoundingClientRect().top;

        const mouseX2 = touch2.clientX - canvas.getBoundingClientRect().left;
        const mouseY2 = touch2.clientY - canvas.getBoundingClientRect().top;

        let cont = 0;
        if (imagePositions.length > 0) {
          for (position of imagePositions) {


            if (mouseX >= position[0] && mouseX <= position[0] + imageDimensions[cont][0] && mouseY >= position[1] && mouseY <= position[1] + imageDimensions[cont][1]) {
              if (mouseX2 >= position[0] && mouseX2 <= position[0] + imageDimensions[cont][0] && mouseY2 >= position[1] && mouseY2 <= position[1] + imageDimensions[cont][1]) {

                isResizing = true;

                nImage = cont;




              }

            }
            cont++;


          }

          cont = 0;
        }






        canvas.addEventListener('touchmove', function (e) {
          const touch = e.touches[0];
          const touch2 = e.touches[1];


          const mouseX = touch.clientX - canvas.getBoundingClientRect().left;
          const mouseY = touch.clientY - canvas.getBoundingClientRect().top;

          const mouseX2 = touch2.clientX - canvas.getBoundingClientRect().left;
          const mouseY2 = touch2.clientY - canvas.getBoundingClientRect().top;

          if (isResizing) {

            if (mouseX > mouseX2) {
              appX = distanceX;

              distanceX = mouseX - mouseX2;


              if (appX > distanceX) {
                isIncreasingX = false;



              }
              else {
                isIncreasingX = true;

              }
            }
            else {
              appX = distanceX;

              distanceX = mouseX2 - mouseX;

              if (appX > distanceX) {
                isIncreasingX = false;



              }
              else {
                isIncreasingX = true;

              }

            }
            if (mouseY > mouseY2) {
              appY = distanceY;

              distanceY = mouseY - mouseY2;

              if (appY > distanceY) {
                isIncreasingY = false;



              }
              else {
                isIncreasingY = true;

              }
            }
            else {
              if (appY > distanceY) {
                isIncreasingY = false;



              }
              else {
                isIncreasingY = true;

              }
              distanceY = mouseY2 - mouseY
            }

            imageResize(nImage, isIncreasingX, isIncreasingY);
          }
        }
        );



        canvas.addEventListener('touchend', function (e) {


          isResizing = false;




        });
      }
    }

    );






    activatedButton = true;
    $('html').css('background', 'white');
    $('body').css('background', 'white');
    $('.selezione').css({
      'flex-direction': 'column',
      'align-items': 'flex-start',
      'justify-content': 'flex-start',
      'width': 'fit-content',
      'height': 'fit-content',
      'position': 'absolute',
      'top': '10px',
      'left': '0'
    });

    $('canvas').css({
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': window.innerWidth,
      'height': window.innerHeight,
      'border-radius': '0'
    });

    $('.gatto').css({
      'width': window.innerWidth,
      'height': window.innerHeight
    });

    $('.main').css({
      'width': window.innerWidth,
      'height': window.innerHeight
    });




    $("img[pid='1']").attr('width', '30px')
    $("img[pid='1']").attr('height', '30px')

    $("img[pid='1']").css('filter', 'brightness(0)')
    $("img[pid='1']").css('margin-top', '10px')
    $("img[pid='1']").css('margin-bottom', '10px')




    $('.selezione').append(
      $('<div>')
        .addClass('box')
        .addClass('n')
        .text('Nascondi')
        .attr('pid', '14')
        .addClass('m')
    );

    $('.box').css('transform', 'scale(0.6)');

    $('.m-t').removeClass('m-t');

    let flag = true;

    $(`.box[pid='98']`).click(function () {


      $('.bar').fadeToggle(500)
      $('.bar1').fadeOut(500)


    })
    $(`.box[pid='199']`).click(function () {

      $('.bar').fadeOut(500)
      $('.bar1').fadeToggle(500)


    })

    $(`.box[pid='14']`).click(function () {

      flag = !flag;
      $(this).text(flag ? 'Nascondi' : 'Mostra');


      $('.n').not('.m').not('.bar').not('.bar1').not(".box[pid='10']").toggle("slide:right");

      if ($('.bar').css('display') != 'none') {

        $('.bar').toggle("slide:right")
      }

      if ($('.bar1').css('display') != 'none') {

        $('.bar1').toggle("slide:right")
      }


      $("img[pid='1']").not('.m').toggle("slide:right");
    });


    // Funzione per caricare il progetto
    $(`.box[pid='76']`).click(function (event) {


      document.getElementById('fileInput').click();

      document.getElementById('fileInput').addEventListener('change', function (event) {
        if (!event.target.files || event.target.files.length === 0) {
          alert("Nessun file selezionato.");
          return;
        }
        else {
          imagesData1 = [];
          imagePositions = [];
          imageDimensions = [];
          lines = []; // Resetta le linee

          dragOffsetX = 0;
          dragOffsetY = 0;
        }

        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
          try {
            const projectData = JSON.parse(e.target.result);

            // Recupero del canvas e del suo contesto
            const canvas = document.getElementById('myCanvas');

            context.clearRect(0, 0, canvas.width, canvas.height);

            // Caricamento dello sfondo del canvas
            const backgroundImg = new Image();
            backgroundImg.onload = function () {
              context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);


            };
            backgroundImg.src = projectData.canvas;

            // Caricamento delle altre immagini
            let imageLoadPromises = projectData.images.map((imageData, index) => {
              return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = imageData; // Base64 dell'immagine

                img.onload = function () {
                  // Aggiungi l'immagine solo quando è pronta
                  imagesData1[index] = img;
                  imagePositions[index] = projectData.positions[index];
                  imageDimensions[index] = projectData.dimensions[index];

                  // Disegna l'immagine una volta caricata
                  context.drawImage(
                    img,
                    imagePositions[index][0],
                    imagePositions[index][1],
                    imageDimensions[index][0],
                    imageDimensions[index][1]
                  );
                  resolve();
                };

                img.onerror = function () {
                  console.error('Impossibile caricare l\'immagine:', imageData);
                  reject('Impossibile caricare l\'immagine');
                };
              });
            });

            // Attendi il caricamento di tutte le immagini prima di procedere
            Promise.all(imageLoadPromises).then(() => {
              console.log('Tutte le immagini sono state caricate correttamente.');
            }).catch((error) => {
              console.error('Errore durante il caricamento delle immagini:', error);
            });

            projectData.lines.forEach(lineData => {
              lines.push(new Line(lineData.startX, lineData.startY, lineData.endX, lineData.endY, lineData.color, lineData.lineWidth));
            });

            // Ridisegna tutte le linee
            drawAllLines();
          } catch (error) {
            alert("Errore nel caricamento del progetto. File JSON non valido.");
            console.error(error);
          }
        };

        reader.readAsText(file); // Lettura del file come testo
      });
    });


    // Funzione per salvare il progetto
    $(`.box[pid='77']`).click(function () {
      const canvas = document.getElementById('myCanvas');
      const context = canvas.getContext('2d');

      // Array per memorizzare le immagini in formato base64
      let imagesDataToSave = [];

      // Converti le immagini in base64 (se non lo sono già)
      imagesData1.forEach((img) => {
        if (img instanceof HTMLImageElement) {
          imagesDataToSave.push(img.src);  // Salva la stringa base64 dell'immagine
        }
      });

      // Salva lo stato del canvas come immagine base64
      const projectData = {
        images: imagesDataToSave,            // Salva i dati base64 delle immagini
        positions: imagePositions,           // Salva le posizioni delle immagini
        dimensions: imageDimensions,         // Salva le dimensioni delle immagini
        lines: lines,        //Salva le linee
        canvas: canvas.toDataURL()           // Salva lo sfondo del canvas come base64
      };

      // Converti il progetto in JSON e crealo come blob
      const jsonString = JSON.stringify(projectData);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'progetto.json';
      link.click();
    });



    $('.selezione .box').on('mousedown touchstart', function () {
      $(this).css('transform', 'scale(0.8)');
    });

    $('.selezione .box').on('mouseup touchend', function () {
      $(this).css('transform', 'scale(0.6)');
    });





    flag1 = true;

    $canvas.width = window.innerWidth;
    $canvas.height = window.innerHeight;





  } else {

    activatedButton = false;

    $('.bar').remove()


    $(".box[pid='98']").remove()



    $('.box').css('transform', 'scale(1.0)');
    $(".box[pid='9'").addClass('m-t')
    $(".box[pid='10'").addClass('m-t')
    $(".box[pid='11'").addClass('m-t')
    $(".box[pid='12'").addClass('m-t')
    $(".box[pid='5'").addClass('m-t')


    $('html').get(0).style.cssText = backupStyle.html;
    $('body').get(0).style.cssText = backupStyle.body;
    $('.selezione').get(0).style.cssText = backupStyle.selezione;
    $('canvas').get(0).style.cssText = backupStyle.canvas;
    $('.gatto').get(0).style.cssText = backupStyle.gatto;
    $('.main').get(0).style.cssText = backupStyle.main;
    $('.main').append($("img[pid='1']"))
    $("img[pid='1']").get(0).style.cssText = backupStyle.img
    $("img[pid='1']").attr('height', '100px')
    $("img[pid='1']").attr('width', '100px')

    $(".main").show(0)

    $(".box[pid='69']").remove()
    $(".box[pid='15']").remove()


    $canvas.width = 200;
    $canvas.height = 200;

    $('.selezione .box').on('mousedown touchstart', function () {
      $(this).css('transform', 'scale(1.2)');
    });

    $('.selezione .box').on('mouseup touchend', function () {
      $(this).css('transform', 'scale(1.0)');
    });
    $(`.box[pid='14']`).remove();


    flag1 = false;
  }
});
$(document).on('touchstart', '.loaded', function () {



  var app = $(this);


  app.css('border', '1px solid black');


  setTimeout(function () {
    app.css('border', '0px solid black');
  }, 2000);
});









