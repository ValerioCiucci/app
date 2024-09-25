
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
$('canvas').hide();


var mouse = true;
let lastX = 0;
let lastY = 0;
var timeout = [];
var audio = $("audio")[0];
audio.volume = 0.2;


function clearTimeouts() {
  if (timeout.length > 0) {
    for (i = 0; i < timeout.length; i++) {
      clearTimeout(timeout[i]);
    }
    timeout = [];
  }
}


function accarezza() {
  if (mouse == true) {
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


$(".gatto img").on('touchstart', function (e) {
  if (mouse == true) {
    const touch = e.touches[0];
    $('.particle').css({
      left: touch.pageX + 'px',
      top: touch.pageY + 'px',
      opacity: 1
    });

    clearTimeouts();
    $(".d").children().t_off(true);
    $(".gatto img").attr('src', `img/accarezza.gif`);
    $(".d").children().t("SMETTILA DI ACCAREZZARMI");

    i = setInterval(() => {
      createParticle(touch.pageX, touch.pageY);
    }, 100);
  }
});


$(".gatto img").on('touchend', function (e) {
  if (mouse == true) {
    $('.particle').css('opacity', '0'); 

    timeout.push(setTimeout(function () {
      $(".gatto img").attr('src', `img/gatto.gif`);
      $(".d").children().t_off(true);
      $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
    }, 5000));

    clearInterval(i);
  }
});


if (mouse == true) {
  $(".gatto img").on('mouseenter', accarezza);
}


$(`.box[pid='3']`).click(function () {
  if (mouse==true){
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


$(`.box[pid='4']`).click(function () {
  mouse = false; 
  clearTimeouts();

  $(".d").children().t_off(true);
  $(".gatto img").attr('src', `img/triste2.gif`);
  $(".d").children().t("HO CAPITO ME NE VADO");

 
  $(".gatto img").fadeOut(5000);
  $(".d").fadeOut(5000);
  $(".box").hide(5000);

  timeout.push(setTimeout(function () {
    $(".n").toggle(1000);
  }, 5000));
});


$(`.box[pid='1']`).click(function () {
  if (mouse==true){
  clearTimeouts();
  $(".d").children().t_off(true);
  $(".gatto img").attr('src', `img/love.gif`);
  $(".d").children().t("GRAZIEEEE");

  timeout.push(setTimeout(function () {
    $(".gatto img").attr('src', `img/beve.gif`);
    $(".d").children().t_off(true);
    $(".d").children().t("GLU GLU GLU");

    setTimeout(function () {
      $(".gatto img").attr('src', `img/gatto.gif`);
      $(".d").children().t_off(true);
      $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
    }, 5000);
  }, 5000));
  }
});


$(`.box[pid='2']`).click(function () {
  if (mouse==true){
  clearTimeouts();
  $(".d").children().t_off(true);
  $(".gatto img").attr('src', `img/arrabbiato.gif`);
  $(".d").children().t("SEI UNO STRONZOO!");

  timeout.push(setTimeout(function () {
    $(".gatto img").attr('src', `img/gatto.gif`);
    $(".d").children().t_off(true);
    $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
  }, 5000));
}
});


let drawingEnabled = false;
const $canvas = $('canvas')[0];
const ctx = $canvas.getContext('2d');
let color = 'black';
let firstTouch=false;

function draw(x, y) {
  
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
if(firstTouch==false){
  ctx.lineTo(x, y);  
   
}
else{
  ctx.moveTo(x, y); 
  firstTouch=false;
}  
 

  ctx.stroke();
  lastX = x;
  lastY = y;
}

function enableDrawing() {
  ctx.beginPath()
  color = 'black';
  $('canvas').show();
  drawingEnabled = true;
}

$('.box[pid=6]').on('click', enableDrawing);


$canvas.addEventListener('mousedown', function(e) {
  let draw1 = true;
  $canvas.addEventListener('mousemove', function(e) {
    if (draw1) {
      const rect = $canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      draw(x, y);
    }
  });
  $canvas.addEventListener('mouseup', function() {
    draw1 = false;
    firstTouch=true;
    
  });
});

$canvas.addEventListener('touchstart', function(e) {
  let draw1 = true;
$canvas.addEventListener('touchmove', function(e) {
  if (draw1) {
    e.preventDefault();
    const rect = $canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    draw(x, y);
  }
});

$canvas.addEventListener('touchend', function() {
  draw1 = false;
  firstTouch=true;
  
});

}

$(`.box[pid='8']`).click(function() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  ctx.beginPath()
});


$(`.box[pid='7']`).click(function() {
  color = 'white';
  

  ctx.beginPath()
});


$(`.box[pid='5']`).click(function () {
  mouse = true;
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  $('canvas').hide();
  clearTimeouts();

  $(".n").toggle(100);
  $(".gatto img").fadeIn(3000);
  $(".d").fadeIn(3000);
  $(".box").not(".n").show(1000);
  $(".gatto img").attr('src', `img/arrabbiato2.gif`);
  $(".d").children().t("E MO CHE VOI");
});
