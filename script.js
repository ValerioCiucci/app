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
var thickness=5;

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
    for (let i = 0; i < timeout.length; i++) {
      clearTimeout(timeout[i]);
    }
    timeout = [];
  }
}

function accarezza() {
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

$(".gatto img").on('touchstart', function (e) {
  if (mouse) {
    const touch = e.touches[0];
    createParticle(touch.pageX, touch.pageY);
    clearTimeouts();
    $(".d").children().t_off(true);
    $(".gatto img").attr('src', `img/accarezza.gif`);
    $(".d").children().t("SMETTILA DI ACCAREZZARMI");

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
    }, 5000));

    clearInterval($(this).data("intervalId")); 
  }
});

if (mouse) {
  $(".gatto img").on('mouseenter', accarezza);
}

$(`.box[pid='3']`).click(function () {
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

$(`.box[pid='4']`).click(function () {

  mouse = false;
  clearTimeouts();
  $(".d").children().t_off(true);
  $(".gatto img").attr('src', `img/triste2.gif`);
  $(".d").children().t("HO CAPITO ME LEVO DAL CAZZO");

  $(".gatto img").fadeOut(3000,function(){
    $(".d").fadeOut(100);
    $(".box").hide(1000);
    timeout.push(setTimeout(function () {


      $(".n").toggle(1000);
      enableDrawing()
    }, 1000));
  });

  });
  

  

$(`.box[pid='1']`).click(function () {
  if (mouse) {
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
  if (mouse) {
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
let color = $('input')[0].value;
let firstTouch = false;
let back =[]
let forward=[];


function draw(x, y) {
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.lineCap = 'round';

  if (firstTouch) {
    ctx.moveTo(x, y);
    firstTouch = false; 
  } else {
    ctx.lineTo(x, y);
  }

  ctx.stroke();
  lastX = x;
  lastY = y;
}

function enableDrawing() {
  ctx.beginPath();
  color = $('input')[0].value;
  $('canvas').show();
  drawingEnabled = true;
}

$('.box[pid=6]').on('click', enableDrawing);

$canvas.addEventListener('mousedown', function (e) {
  back .push(ctx.getImageData(0, 0, $canvas.width, $canvas.height));

  firstTouch = true; 
  let draw1 = true;

  const rect = $canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  draw(x, y); 

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
  back .push( ctx.getImageData(0, 0, $canvas.width, $canvas.height));
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

$(`.box[pid='8']`).click(function () {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  ctx.beginPath();
});

$(`.box[pid='11']`).click(function () {
  forward.push(ctx.getImageData(0, 0, $canvas.width, $canvas.height));

  
    ctx.putImageData(back[back.length-1], 0, 0); 
    back.pop()

    ctx.beginPath()
  
});
$(`.box[pid='12']`).click(function () {
  back.push(ctx.getImageData(0, 0, $canvas.width, $canvas.height));

  
    ctx.putImageData(forward[forward.length-1], 0, 0); 
    forward.pop()
    ctx.beginPath()
  
});

$(`.box[pid='7']`).click(function () {
  color = 'white';
  ctx.beginPath();
});

$(`.box[pid='5']`).click(function () {
  mouse = true;
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  $('input')[0].value='black';
  $('canvas').hide();
  clearTimeouts();

  $(".n").toggle(100);
  $(".gatto img").fadeIn(3000);
  $(".d").fadeIn(3000);
  $(".box").not(".n").show(1000);
  $(".gatto img").attr('src', `img/arrabbiato2.gif`);
  $(".d").children().t("E MO CHE VOI");
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
  color = $('input')[0].value;
  ctx.beginPath();
});
$('.box').on('mousedown touchstart', function() {
  $(this).addClass('active');
});

$('.box').on('mouseup touchend', function() {
  $(this).removeClass('active'); 
});
var cont=0;

$(".box[pid='13']").click(function () {
 
  ctx.beginPath()

if(cont<4){
 

console.log(cont)
if(cont==0){
$(".box[pid='13'] img").attr('height','30px').attr('width','30px')
thickness+=3
}else 
if(cont==1){
  thickness+=3
  $(".box[pid='13'] img").attr('height','50px').attr('width','50px')

}
if(cont==2){
  thickness+=5
  $(".box[pid='13'] img").attr('height','70px').attr('width','70px')

}
if(cont==3){
  thickness+=5
  $(".box[pid='13'] img").attr('height','80px').attr('width','80px')

}

cont+=1;
}
else{
  cont=0;
  thickness=5;
  $(".box[pid='13'] img").attr('height','10px').attr('width','10px')

}



});
let backupStyle = {
  htmlBackground: $('html').css('background'),
  bodyBackground: $('body').css('background'),
  selezioneFlexDirection: $('.selezione').css('flex-direction'),
  selezioneAlignItems: $('.selezione').css('align-items'),
  selezioneJustifyContent: $('.selezione').css('justify-content'),
  selezioneWidth: $('.selezione').css('width'),
  selezioneHeight: $('.selezione').css('height'),
  boxTransform: $('.box').css('transform'),
  mainWidth: $('.main').css('width'),
  mainHeight: $('.main').css('height'),
  canvasHeight:$('canvas').css('height'),
  canvasWidth:$('canvas').css('width'),
 gattoWidth:$('.gatto').css('width'),
 gattoHeight:$('.gatto').css('height')

};


let flag1=false;
$(`.box[pid='10']`).click(function () {
  if(!flag1){

  $('html').css('background','white')

  $('body').css('background','white')
  $('body').css('background','white')

  
  $('.selezione').css('flex-direction','column')
  $('.selezione').css('align-items','flex-start')
  $('.selezione').css('justify-content','flex-start')
  $('.selezione').css('width','fit-content')
  $('.selezione').css('height','fit-content')
  $('.box').removeClass('m-t')





  $('.gatto').css('width',window.innerWidth)
  $('.gatto').css('height',window.innerHeight)

  $('canvas').css('width',window.innerWidth)
  $('canvas').css('height',window.innerHeight)
  $('canvas').css('position','absolute').css('top','0').css('left','0')
  $('.selezione').css('position','absolute').css('top','50').css('left','0')
 $('.selezione').append($('<div>').addClass('box').addClass('n').text('Nascondi').attr('pid','14').addClass('m')
 
  

)

let flag=true;
$(`.box[pid='14']`).click(function () {
  if(flag){
  $(this).text('Mostra')
  flag=false;
  }
  else{
    $(this).text('Nascondi')
    flag=true;
  }
  $('.n').not('.m').toggle("slide:right");


  
});


$('.box').css('transform','scale(0.6)')



  $('.main').css('width',window.innerWidth)
  $('.main').css('height',window.innerHeight)

 
 




$canvas.width=window.innerWidth
$canvas.height=window.innerHeight





flag1=true

}
else{


  $(`.box[pid='9']`).addClass('m-t')
  $(`.box[pid='10']`).addClass('m-t')
  $(`.box[pid='11']`).addClass('m-t')
  $(`.box[pid='12']`).addClass('m-t')
  $(`.box[pid='5']`).addClass('m-t')


  console.log(backupStyle.selezioneFlexDirection)
  $(`.box[pid='14']`).hide()
 // Ripristina lo stato originale
 $('html').css('background', backupStyle.htmlBackground).css({

width:'100%',
height:'100%'
  
 });
 $('body').css('background', backupStyle.bodyBackground ).css({

  width:'100%',
  height:'100%'
    
   });;
 $('.selezione').css({
  'position':'relative',
   'flex-direction': backupStyle.selezioneFlexDirection,
   'align-items': backupStyle.selezioneAlignItems,
   'justify-content': backupStyle.selezioneJustifyContent,
   'width': backupStyle.selezioneWidth,
   'height': backupStyle.selezioneHeight,
   
 });
$('.box').css({

'transform':'scale(1.0)'

})
 $('.gatto').css('width', backupStyle.gattoWidth); 
 $('.gatto').css('height', backupStyle.gattoHeight); 

 $('.main').css({
   'width':'100%',
   'height': '100%',
   'position':'relative'
 });
 $('canvas').css({


'width': backupStyle.canvasWidth,
   'height': backupStyle.canvasHeight,
   'position':'relative'
   


 })

 $canvas.width = '200px'; 
 $canvas.height = '200px';

 flag1 = false; 
  
}
 
});
