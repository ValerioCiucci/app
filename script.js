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

var playingAudio=[]

function stopAudio(){

for(let i=0;i<playingAudio.length;i++){

playingAudio[i].pause()



}


}




window.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, { passive: false });

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
var thickness=5;
$(".main").hide()




$(".n").hide();
$('canvas').hide();
var activatedButton=false;
var mouse = true;
let lastX = 0;
let lastY = 0;
var timeout = [];
var audio = $("audio")[0];
audio.volume = 0.2;

$("img[pid='0']").click(function(){
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
playingAudio[playingAudio.length-1].play()

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
$(".gatto img").click(function(){
  
  

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
  playingAudio[playingAudio.length-1].play()
   
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

let isRunning=false;
$(`.box[pid='4']`).click(function () {
  stopAudio()

  mouse = false;
  if (isRunning) return; 

  isRunning = true;
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
     let i=0;
     playingAudio.push($('audio')[1])
     playingAudio[ playingAudio.length-1].play()
      $('audio')[1].onended=function(){
        i++;
        if (i < 3) { 
          playingAudio[ playingAudio.length-1].currentTime = 0;  
          playingAudio[ playingAudio.length-1].play();  
        }
        else{
          playingAudio.pop()

        }


      }

      
    

      
      timeout.push(
      setTimeout(function () {
        $(".gatto img").attr('src', `img/gatto.gif`);
        $(".d").children().t_off(true);
        $(".d").children().t("HO VOGLIA DI UN BUBBLE TEA");
      }, 5000));
    }, 5000));
  }
});

$(`.box[pid='2']`).click(function () {
  stopAudio()

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
  console.log(activatedButton)
  if(activatedButton){
    

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
        $("img[pid='1']").attr('height','100px')
        $("img[pid='1']").attr('width','100px')
       
        $(".main").show(0)
    
        $(".box[pid='69']").remove()
    
        $canvas.width=200;
        $canvas.height=200;
    
        $('.selezione .box').on('mousedown touchstart', function() {
          $(this).css('transform', 'scale(1.2)'); 
        });
        
        $('.selezione .box').on('mouseup touchend', function() {
          $(this).css('transform', 'scale(1.0)'); 
        });
        
        $(`.box[pid='14']`).remove();
    
        
        flag1 = false;
        activatedButton=false;


  }
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
  img:$("img[pid='1'").get(0).style.cssText,
  html: $('html').get(0).style.cssText,
  body: $('body').get(0).style.cssText,
  selezione: $('.selezione').get(0).style.cssText,
  canvas: $('canvas').get(0).style.cssText,
  gatto: $('.gatto').get(0).style.cssText,
  main: $('.main').get(0).style.cssText
};

let flag1 = false;
$(`.box[pid='10']`).click(function () {
  if (!flag1) {

    $('.selezione').append(
      $('<div>')
          .addClass('box')
          .attr('pid', '15')
          .text('Carica Immagine')
  );
  
 
    function makeDraggable(element) {
      let posX = 0, posY = 0, lastX1 = 0, lastY2 = 0;
    
      element.onmousedown = dragMouseDown;
      element.ontouchstart = dragTouchStart;
    
      function dragMouseDown(e) {
        e = e || window.e;
        e.preventDefault();
        lastX1 = e.clientX;
        lastY2 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }
    
      function dragTouchStart(e) {
        const touch = e.touches[0];
        lastX1 = touch.clientX;
        lastY2 = touch.clientY;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementTouchDrag;
      }
    
      function elementDrag(e) {
        e = e || window.e;
        e.preventDefault();
        posX = lastX1 - e.clientX;
        posY = lastY2 - e.clientY;
        lastX1 = e.clientX;
        lastY2 = e.clientY;
        element.style.top = (element.offsetTop - posY) + "px";
        element.style.left = (element.offsetLeft - posX) + "px";
      }
    
      function elementTouchDrag(e) {
        const touch = e.touches[0];
        posX = lastX1 - touch.clientX;
        posY = lastY2 - touch.clientY;
        lastX = touch.clientX;
        lastY = touch.clientY;
        element.style.top = (element.offsetTop - posY) + "px";
        element.style.left = (element.offsetLeft - posX) + "px";
      }
    
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
      }
    }
    
    // Aggiungi l'evento per caricare le immagini e renderle spostabili
    $(`.box[pid='15']`).click(function () {
      let fileInput = $('<input>').attr('type', 'file').attr('accept', 'image/*').hide();
      $('body').append(fileInput); 
      fileInput.click();
    
      fileInput.on('change', function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = function (event) {
          const img = new Image();
          img.src = event.target.result;
          img.style.position = 'absolute';
          img.style.top = '100px';
          img.style.left = '100px';
          img.style.width = '200px';
          img.style.height = '200px'; 
          img.style.cursor = 'move';
    
          $('.main').append(img)
          $('img').addClass('loaded')
          makeDraggable(img); 
    
          fileInput.remove();
        };
    
        reader.readAsDataURL(file);
      });


     
    });
    
  
    




    activatedButton=true;
    $('html').css('background', 'white');
    $('body').css('background', 'white');
    $('.selezione').css({
      'flex-direction': 'column',
      'align-items': 'flex-start',
      'justify-content': 'flex-start',
      'width': 'fit-content',
      'height': 'fit-content',
      'position': 'absolute',
      'top': '50px',
      'left': '0'
    });

    $('canvas').css({
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': window.innerWidth,
      'height': window.innerHeight
    });

    $('.gatto').css({
      'width': window.innerWidth,
      'height': window.innerHeight
    });

    $('.main').css({
      'width': window.innerWidth,
      'height': window.innerHeight
    });

    $('.selezione').append($('<div>').addClass('box').addClass('n').attr('pid','69').append( $("img[pid='1']")))
    $("img[pid='1']").attr('width','30px')
    $("img[pid='1']").attr('height','30px')
    
    $("img[pid='1']").css('filter','brightness(0)')
    $("img[pid='1']").css('margin-top','10px')
    $("img[pid='1']").css('margin-bottom','10px')

    
    
   
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
    $(`.box[pid='14']`).click(function () {
      flag = !flag;
      $(this).text(flag ? 'Nascondi' : 'Mostra');
      $('.n').not('.m').toggle("slide:right");
      $("img[pid='1']").not('.m').toggle("slide:right");
    });

    $('.selezione .box').on('mousedown touchstart', function() {
      $(this).css('transform', 'scale(0.8)'); 
    });
    
    $('.selezione .box').on('mouseup touchend', function() {
      $(this).css('transform', 'scale(0.6)'); 
    });

   



    flag1 = true;
    
    $canvas.width=window.innerWidth;
    $canvas.height=window.innerHeight;

  } else {
    
    activatedButton=false;

   
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
    $("img[pid='1']").attr('height','100px')
    $("img[pid='1']").attr('width','100px')
   
    $(".main").show(0)

    $(".box[pid='69']").remove()

    $canvas.width=200;
    $canvas.height=200;

    $('.selezione .box').on('mousedown touchstart', function() {
      $(this).css('transform', 'scale(1.2)');
    });
    
    $('.selezione .box').on('mouseup touchend', function() {
      $(this).css('transform', 'scale(1.0)'); 
    });
    $(`.box[pid='14']`).remove();

    
    flag1 = false;
  }
});
$(document).on('touchstart', '.loaded', function(){
  

  // Memorizza il riferimento all'elemento cliccato
  var $this = $(this);

  // Applica il bordo all'immagine cliccata
  $this.css('border', '1px solid black');

  // Rimuovi il bordo dopo 2 secondi
  setTimeout(function(){
    $this.css('border', '0px solid black');
  }, 2000);
});