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
var imagesData = [];
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
  $(".d").children().t("HO CAPITO ME NE VADO");

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
let back =[]
let forward=[];

var draggingImg=false;



function draw(x, y) {
  if (!draggingImg){
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
  }
  ctx.stroke();
  lastX = x;
  lastY = y;

}

function enableDrawing() {
  draggingImg=false;
  ctx.beginPath();
  color = $("input")[1].value;
  $('canvas').show();
  drawingEnabled = true;
}

$(".box[pid=6]").on('click', enableDrawing);


$canvas.addEventListener('mousedown', function (e) {
  back .push(ctx.getImageData(0, 0, $canvas.width, $canvas.height));

  firstTouch = true; 
  let draw1 = true;

  const rect = $canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if(drawingEnabled){
  draw(x, y)}


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
  imagesData=[]

 
  

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
        $('.bar').remove()

       
        $(".box[pid='98']").remove()

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
  $("input")[1].value='black';
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
  color = $("input")[1].value;
 
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
      .css('display','flex')
      .css('width','80%')
      
      
      .append(
      $('<div>')
          .addClass('box')
          .addClass('n')
          .attr('pid', '98')
          .text('Strumenti')
      ).append(
        $('<div>')
            .addClass('box')
            .addClass('n')
            .attr('pid', '15')
            .text('Carica immagine')
            .css('display','none')
            .addClass('bar')
        )
        .append(
          $('<div>')
              .addClass('box')
              .addClass('n')
              .attr('pid', '76')
              .text('Carica progetto')
              .css('display','none')
              .addClass('bar')
          )
          .append(
            $('<div>')
                .addClass('box')
                .addClass('n')
                .attr('pid', '77')
                .text('Salva progetto')
                .css('display','none')
                .addClass('bar')
            )

            .append(

              $('<div>').addClass('n').attr('pid','69').append( $("img[pid='1']")).css('display','none')
              .addClass('bar').addClass('box').css('border','0px').addClass('noremove')

              






            )
            

  );
  
 
    // function makeDraggable(element) {
    //   let posX = 0, posY = 0, lastX1 = 0, lastY2 = 0;
    
    //   element.onmousedown = dragMouseDown;
    //   element.ontouchstart = dragTouchStart;
    //   deleteImg(element);


    //   function deleteImg(image) {
    //     let container= $('.main')[0]

    //     let lastTapTime = 0; 
    
    //     image.addEventListener('touchstart', function(e) {
    //         const currentTime = new Date().getTime();
    //         const tapLength = currentTime - lastTapTime;
    
    //         if (tapLength < 300 && tapLength > 0) {
                
              
    //             container.removeChild(image); 
    //             images = images.filter(img => img !== image); 
    //         }
    
    //         lastTapTime = currentTime;
    //     });
    // }
    //   function dragMouseDown(e) {
    //     e = e || window.e;
    //     e.preventDefault();
    //     lastX1 = e.clientX;
    //     lastY2 = e.clientY;
    //     document.onmouseup = closeDragElement;
    //     document.onmousemove = elementDrag;
    //   }
    
    //   function dragTouchStart(e) {
    //     const touch = e.touches[0];
    //     lastX1 = touch.clientX;
    //     lastY2 = touch.clientY;
    //     document.ontouchend = closeDragElement;
    //     document.ontouchmove = elementTouchDrag;
    //   }
    
    //   function elementDrag(e) {
    //     e = e || window.e;
    //     e.preventDefault();
    //     posX = lastX1 - e.clientX;
    //     posY = lastY2 - e.clientY;
    //     lastX1 = e.clientX;
    //     lastY2 = e.clientY;
    //     element.style.top = (element.offsetTop - posY) + "px";
    //     element.style.left = (element.offsetLeft - posX) + "px";
    //   }
    
    //   function elementTouchDrag(e) {
    //     const touch = e.touches[0];
    //     posX = lastX1 - touch.clientX;
    //     posY = lastY2 - touch.clientY;
    //     lastX = touch.clientX;
    //     lastY = touch.clientY;
    //     element.style.top = (element.offsetTop - posY) + "px";
    //     element.style.left = (element.offsetLeft - posX) + "px";
    //   }
    
    //   function closeDragElement() {
    //     document.onmouseup = null;
    //     document.onmousemove = null;
    //     document.ontouchend = null;
    //     document.ontouchmove = null;
    //   }
    // }
    

    let isDragging = false;
let imgX = 50; // Posizione iniziale X
let imgY = 50; // Posizione iniziale Y
let imgWidth, imgHeight;
let dragOffsetX = 0;
let dragOffsetY = 0;
let img = new Image(); // L'immagine che verrà caricata
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

// Carica l'immagine tramite file input
$(`.box[pid='15']`).click(function () {
    let fileInput = $('<input>').attr('type', 'file').attr('accept', 'image/*').hide();
    $('body').append(fileInput); 
    fileInput.click();

    fileInput.on('change', function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            img.src = event.target.result;
            
            img.onload = function() {
                // Imposta dimensioni del canvas in base all'immagine
               
                
                // Memorizza larghezza e altezza dell'immagine
                imgWidth = img.width;
                imgHeight = img.height;
                imagesData.push(img)
              console.log(imagesData[imagesData.length-1])
                // Disegna immagine iniziale
                context.drawImage(imagesData[imagesData.length-1], imgX, imgY, imgWidth, imgHeight);
            };
            
            fileInput.remove();
        };

        reader.readAsDataURL(file);
    });
});

// Funzione per disegnare l'immagine
function drawImage() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Pulisce il canvas
    context.drawImage(imagesData[imagesData.length-1],imgX, imgY, imgWidth, imgHeight); // Ridisegna l'immagine nella nuova posizione
}

// Eventi per abilitare il trascinamento con il mouse
canvas.addEventListener('mousedown', function(e) {
    // Calcola l'offset per il trascinamento
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    // Controlla se l'utente ha cliccato sull'immagine
    if (mouseX >= imgX && mouseX <= imgX + imgWidth && mouseY >= imgY && mouseY <= imgY + imgHeight) {
        isDragging = true;
   

        dragOffsetX = mouseX - imgX;
        dragOffsetY = mouseY - imgY;
    }
});

canvas.addEventListener('mousemove', function(e) {
  
    if (isDragging) {

        // Aggiorna la posizione dell'immagine durante il trascinamento
        imgX = e.offsetX - dragOffsetX;
        imgY = e.offsetY - dragOffsetY;
        drawImage(); // Ridisegna il canvas con l'immagine spostata
    }
});

canvas.addEventListener('mouseup', function() {
    isDragging = false; // Fine del trascinamento
   

});

// Aggiungiamo anche i gesti touch per dispositivi mobili
canvas.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    const mouseX = touch.clientX - canvas.getBoundingClientRect().left;
    const mouseY = touch.clientY - canvas.getBoundingClientRect().top;

    // Controlla se l'utente ha toccato l'immagine
    if (mouseX >= imgX && mouseX <= imgX + imgWidth && mouseY >= imgY && mouseY <= imgY + imgHeight) {
        isDragging = true;
    
      draggingImg=true;
        dragOffsetX = mouseX - imgX;
        dragOffsetY = mouseY - imgY;
    }
});

canvas.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Evita lo scrolling durante il trascinamento
    if (isDragging) {
      
      
      draggingImg=true;
        const touch = e.touches[0];
        const mouseX = touch.clientX - canvas.getBoundingClientRect().left;
        const mouseY = touch.clientY - canvas.getBoundingClientRect().top;
        
        // Aggiorna la posizione dell'immagine durante il trascinamento
        imgX = mouseX - dragOffsetX;
        imgY = mouseY - dragOffsetY;
        drawImage(); // Ridisegna l'immagine
        
    }
});

canvas.addEventListener('touchend', function() {
    isDragging = false; // Fine del trascinamento su touch
    draggingImg=false;
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
      'top': '10px',
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

    $(`.box[pid='98']`).click(function () {

      
      $('.bar').fadeToggle(500)


    })

    $(`.box[pid='14']`).click(function () {
      flag = !flag;
      $(this).text(flag ? 'Nascondi' : 'Mostra');


      $('.n').not('.m').not('.bar').toggle("slide:right");

      if ($('.bar').css('display')!='none'){

        $('.bar').toggle("slide:right")
      }

      $("img[pid='1']").not('.m').toggle("slide:right");
    });
// Funzione per caricare il progetto
$(`.box[pid='76']`).click(function (event) {
  document.getElementById('fileInput').click();

  document.getElementById('fileInput').addEventListener('change', function(event) {
      if (!event.target.files || event.target.files.length === 0) {
          alert("Nessun file selezionato.");
          return;
      }

      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
          try {
              const projectData = JSON.parse(e.target.result);

              // Recupero del canvas e del suo contesto
              const canvas = document.getElementById('myCanvas');
              const context = canvas.getContext('2d');
              context.clearRect(0, 0, canvas.width, canvas.height);

              // Caricamento dello sfondo del canvas (dall'immagine salvata come base64)
              const backgroundImg = new Image();
              backgroundImg.onload = function() {
                  context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
              };
              backgroundImg.src = projectData.canvas; // Carica l'immagine di sfondo dal JSON

              // Caricamento delle altre immagini sovrapposte
              projectData.images.forEach(imageData => {
                  const img = new Image();
                  img.onload = function() {
                      context.drawImage(img, imageData.x, imageData.y, imageData.width, imageData.height);
                  };
                  img.src = imageData.src; // Ogni immagine caricata dal JSON con posizione e dimensione
              });

          } catch (error) {
              alert("Errore nel caricamento del progetto. File JSON non valido.");
              console.error(error);
          }
      };

      // Lettura del file come testo
      reader.readAsText(file);
  });
});

// Funzione per salvare il progetto
$(`.box[pid='77']`).click(function () {
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');

  // Cattura tutte le immagini sovrapposte (qui dovresti avere un array di immagini che hai aggiunto)
  

  // Supponiamo che tu abbia una lista di immagini sul canvas che hai tenuto traccia (puoi tenerle in un array)
  // Aggiungi manualmente i dati delle immagini
  document.querySelectorAll('.canvas-image').forEach(img => {
      // Supponendo che tu abbia salvato le posizioni e dimensioni delle immagini
      const x = img.dataset.x;
      const y = img.dataset.y;
      const width = img.width;
      const height = img.height;

      imagesData.push({
          src: img.src, // Salva l'immagine come base64
          x: parseFloat(x), // Coordinate x
          y: parseFloat(y), // Coordinate y
          width: width, // Larghezza dell'immagine
          height: height // Altezza dell'immagine
      });
  });

  // Salva lo stato del canvas come immagine base64
  const projectData = {
      images: imagesData,
      canvas: canvas.toDataURL() // Salva lo sfondo del canvas come base64
  };

  // Converti il progetto in JSON e crealo come blob
  const jsonString = JSON.stringify(projectData);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'progetto.json'; // Nome del file di download
  link.click(); // Simula il clic per scaricare il file
});

// Array per memorizzare le immagini e le loro informazioni
let images = [];

// Variabili per il pinch
let initialDistance = 0;
let selectedImage = null;
let initialWidth, initialHeight;

// Funzione per disegnare tutte le immagini
function drawImages() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    images.forEach(imgObj => {
        ctx.drawImage(imgObj.img, imgObj.x, imgObj.y, imgObj.width, imgObj.height);
    });
}

// Aggiungi un'immagine al canvas e al tracker
function addImageToCanvas(imgSrc, x, y, width, height) {
    const img = new Image();
    img.src = imgSrc;
    img.onload = function () {
        images.push({ img, x, y, width, height });
        drawImages();  // Disegna tutte le immagini
    };
}

// Monitorare il touchstart per il pinch
canvas.addEventListener('touchstart', function (e) {
    if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        initialDistance = Math.hypot(
            touch2.pageX - touch1.pageX,
            touch2.pageY - touch1.pageY
        );

        // Determina se un'immagine è selezionata
        const x1 = touch1.pageX - canvas.offsetLeft;
        const y1 = touch1.pageY - canvas.offsetTop;
        images.forEach(imgObj => {
            if (x1 >= imgObj.x && x1 <= imgObj.x + imgObj.width && 
                y1 >= imgObj.y && y1 <= imgObj.y + imgObj.height) {
                selectedImage = imgObj;
                initialWidth = imgObj.width;
                initialHeight = imgObj.height;
            }
        });
    }
});

// Monitorare il touchmove per il pinch
canvas.addEventListener('touchmove', function (e) {
    if (e.touches.length === 2 && selectedImage) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(
            touch2.pageX - touch1.pageX,
            touch2.pageY - touch1.pageY
        );

        // Calcola il fattore di scala
        const scale = currentDistance / initialDistance;

        // Ridimensiona l'immagine selezionata
        selectedImage.width = initialWidth * scale;
        selectedImage.height = initialHeight * scale;

        // Ridisegna il canvas
        drawImages();
        e.preventDefault();
    }
});

// Resetta il pinch al termine del tocco
canvas.addEventListener('touchend', function (e) {
    if (e.touches.length < 2) {
        selectedImage = null;
        initialDistance = 0;
    }
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
    $("img[pid='1']").attr('height','100px')
    $("img[pid='1']").attr('width','100px')
   
    $(".main").show(0)

    $(".box[pid='69']").remove()
    $(".box[pid='15']").remove()


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
  

 
  var app = $(this);

  
  app.css('border', '1px solid black');


  setTimeout(function(){
    app.css('border', '0px solid black');
  }, 2000);
});









