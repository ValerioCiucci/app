var c = document.getElementById("c");
var ct = c.getContext("2d");
var cH;
var cW;
var bgColor = "#FF6138";
document.documentElement.style.backgroundColor = "#FF6138";

var animations = [];
var circles = [];

// Variabile di stato per attivare/disattivare lo script
var isActive = true;

var colorPicker = (function() {
  var colors = ["#FF6138", "#FFBE53", "#2980B9", "#282741"];
  var index = 0;
  function next() {
    index = index++ < colors.length-1 ? index : 0;
    return colors[index];
  }
  function current() {
    return colors[index]
  }
  return {
    next: next,
    current: current
  }
})();

function removeAnimation(animation) {
  var index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
  var l = Math.max(x - 0, cW - x);
  var h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

function addClickListeners() {
  document.addEventListener("touchstart", handleEvent);
  document.addEventListener("mousedown", handleEvent);
};

function handleEvent(e) {
  // Controlla se lo script è attivo
  if (!isActive) return;

  if (e.touches) { 
    e.preventDefault();
    e = e.touches[0];
  }
  var currentColor = colorPicker.current();
  var nextColor = colorPicker.next();
  var targetR = calcPageFillRadius(e.pageX, e.pageY);
  var rippleSize = Math.min(200, (cW * .4));
  var minCoverDuration = 750;
  
  // Imposta anche il background del tag html al prossimo colore
  document.documentElement.style.backgroundColor = nextColor;

  var pageFill = new Circle({
    x: e.pageX,
    y: e.pageY,
    r: 0,
    fill: nextColor
  });
  var fillAnimation = anime({
    targets: pageFill,
    r: targetR,
    duration: Math.max(targetR / 2, minCoverDuration),
    easing: "easeOutQuart",
    complete: function() {
      bgColor = pageFill.fill;
      removeAnimation(fillAnimation);
    }
  });
  
  var ripple = new Circle({
    x: e.pageX,
    y: e.pageY,
    r: 0,
    fill: currentColor,
    stroke: {
      width: 3,
      color: currentColor
    },
    opacity: 1
  });
  var rippleAnimation = anime({
    targets: ripple,
    r: rippleSize,
    opacity: 0,
    easing: "easeOutExpo",
    duration: 900,
    complete: removeAnimation
  });
  
  var particles = [];
  for (var i = 0; i < 32; i++) {
    var particle = new Circle({
      x: e.pageX,
      y: e.pageY,
      fill: currentColor,
      r: anime.random(24, 48)
    });
    particles.push(particle);
  }
  var particlesAnimation = anime({
    targets: particles,
    x: function(particle) {
      return particle.x + anime.random(rippleSize, -rippleSize);
    },
    y: function(particle) {
      return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
    },
    r: 0,
    easing: "easeOutExpo",
    duration: anime.random(1000, 1300),
    complete: removeAnimation
  });
  animations.push(fillAnimation, rippleAnimation, particlesAnimation);
}

// Funzione per disattivare lo script quando un pulsante viene premuto
function deactivateScript() {
	isActive = false; // Disattiva lo script
	console.log("Script disattivato");
  
	// Stoppa l'animazione principale
	anime.remove(animations); // Ferma tutte le animazioni in corso
  
	// Rimuovi i listener di eventi
	document.removeEventListener("touchstart", handleEvent);
	document.removeEventListener("mousedown", handleEvent);
  
	// Opzionale: pulisci le animazioni
	animations = [];
  }
  

// Aggiungi un listener al tuo pulsante per disattivare lo script
document.getElementById("deactivate").addEventListener("click", deactivateScript);

function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

var Circle = function(opts) {
  extend(this, opts);
}

Circle.prototype.draw = function() {
  ct.globalAlpha = this.opacity || 1;
  ct.beginPath();
  ct.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  if (this.stroke) {
    ct.strokeStyle = this.stroke.color;
    ct.lineWidth = this.stroke.width;
    ct.stroke();
  }
  if (this.fill) {
    ct.fillStyle = this.fill;
    ct.fill();
  }
  ct.closePath();
  ct.globalAlpha = 1;
}

var animate = anime({
  duration: Infinity,
  update: function() {
    ct.fillStyle = bgColor;
    ct.fillRect(0, 0, cW, cH);
    animations.forEach(function(anim) {
      anim.animatables.forEach(function(animatable) {
        animatable.target.draw();
      });
    });
  }
});

var resizeCanvas = function() {
  cW = window.innerWidth;
  cH = window.innerHeight;
  c.width = cW * devicePixelRatio;
  c.height = cH * devicePixelRatio;
  ct.scale(devicePixelRatio, devicePixelRatio);
};

(function init() {
	resizeCanvas();
	if (window.CP) {
	  window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000; 
	}
	window.addEventListener("resize", resizeCanvas);
	addClickListeners(); // Aggiunge i listener di eventi per i click
	document.getElementById("deactivate").addEventListener("click", deactivateScript); // Aggiungi qui il listener per disattivare
	if (!!window.location.pathname.match(/fullcpgrid/)) {
	  startFauxClicking();
	}
	handleInactiveUser();
  })();

function handleInactiveUser() {
  var inactive = setTimeout(function(){
    fauxClick(cW/2, cH/2);
  }, 2000);
  
  function clearInactiveTimeout() {
    clearTimeout(inactive);
    document.removeEventListener("mousedown", clearInactiveTimeout);
    document.removeEventListener("touchstart", clearInactiveTimeout);
  }
  
  document.addEventListener("mousedown", clearInactiveTimeout);
  document.addEventListener("touchstart", clearInactiveTimeout);
}

function startFauxClicking() {
  setTimeout(function(){
    fauxClick(anime.random(cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
    startFauxClicking();
  }, anime.random(200, 900));
}

function fauxClick(x, y) {
  var fauxClick = new Event("mousedown");
  fauxClick.pageX = x;
  fauxClick.pageY = y;
  document.dispatchEvent(fauxClick);
}
