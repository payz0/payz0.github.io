var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var fills = document.getElementById("fill");
var range = document.getElementById("range");
var hapus = document.getElementById("clear");
var info = document.getElementById("infoGaris");
var color = document.getElementById("color");
canvas.style.background = "white";
canvas.style.borderRadius = "10px";
canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight - 100;

// coordinate
var rect = canvas.getBoundingClientRect();
var tebalgaris = 2;
var stX,
  // tmX,
  // tmY,
  stY,
  lsX,
  lsY = 0;
var startDraw = false;
var styleLine;
var diameter,
  sgX = 30;
var temp_canv;
var fillColor = false;
var warna = "white";
//element event

fills.addEventListener("change", (e) => {
  console.log(e.target.checked);
  fillColor = e.target.checked;
},false);
color.style.background = warna;
range.value = tebalgaris;
info.innerHTML = tebalgaris;
range.addEventListener("change", (e) => {
  tebalgaris = e.target.value;
  info.innerHTML = e.target.value;
},false);
hapus.addEventListener("click", clear,false);

function mouseEvent(param) {
  styleLine = param;
  canvas.addEventListener("mousedown", mouseDown,false);
  canvas.addEventListener("mousemove", mouseMove,false);
  canvas.addEventListener("mouseup", mouseUp,false);
  touchEvent()
}

function touchEvent(){
  canvas.addEventListener("touchstart", mouseDown);
  canvas.addEventListener("touchmove", mouseMove);
  canvas.addEventListener("touchend", mouseUp); 
}

function mouseMove(e) {
  if (styleLine === "brush") {
    stX = lsX;
    stY = lsY;
  }
  if (styleLine === "bulat") {
    diameter = stX - lsX < 0 ? lsX - stX : stX - lsX;
    // sgY = stY - lsY < 0 ? lsY - stY : stY - lsY;
  }

  if (styleLine === "segitiga") {
    sgX = stX - lsX < 0 ? lsX - stX : stX - lsX;
    // sgY = stY - lsY < 0 ? lsY - stY : stY - lsY;
  }
  lsX = e.touches[0].clientX - rect.left || e.clientX - rect.left;
  lsY = e.touches[0].clientY - rect.top  || e.clientY - rect.top;
  if (startDraw) {
    drawing();
    // ctx.fillText(styleLine, lsX, lsY);
  }
}
function mouseUp(e) {
  temp_canv = ctx.getImageData(0, 0, canvas.width, canvas.height);
  startDraw = false;
}
function mouseDown(e) {
  if (
    styleLine === "bulat" ||
    styleLine === "segitiga" ||
    styleLine === "garis" ||
    styleLine === "kotak"
  ) {
    stX = e.touches[0].clientX - rect.left || e.clientX - rect.left;
    stY = e.touches[0].clientY - rect.top  || e.clientY - rect.top;
  }
  startDraw = true;
}

function drawing() {
  // clear();
  ctx.lineWidth = tebalgaris;
  ctx.fillStyle = "black";

  if (styleLine === "erase") {
    ctx.fillStyle = "white";
    ctx.fillRect(lsX, lsY, tebalgaris, tebalgaris);
  }

  if (styleLine === "kotak") {
    clearRecord();
    ctx.beginPath();
    ctx.moveTo(stX, stY);
    ctx.lineTo(lsX, stY);
    ctx.lineTo(lsX, lsY);
    ctx.lineTo(stX, lsY);
    ctx.lineTo(stX, stY);
    ctx.stroke();
  }

  if (styleLine === "garis") {
    clearRecord();
    ctx.beginPath();
    ctx.moveTo(stX, stY);
    ctx.lineTo(lsX, lsY);
    ctx.stroke();
  }
  if (styleLine === "segitiga") {
    clearRecord();
    ctx.beginPath();
    ctx.moveTo(stX, stY);
    ctx.lineTo(lsX - sgX * 2, lsY);
    ctx.lineTo(lsX, lsY);
    ctx.lineTo(stX, stY);
    ctx.stroke();
  }

  if (styleLine === "bulat") {
    clearRecord();
    ctx.beginPath();
    ctx.arc(lsX, lsY, diameter, 0, 2 * Math.PI);
    ctx.stroke();
  }

  if (styleLine === "brush") {
    ctx.beginPath();
    ctx.moveTo(stX, stY);
    ctx.lineTo(lsX, lsY);
    ctx.stroke();
  }

  if (fillColor && styleLine !== "erase") {
    ctx.fillStyle = warna;
    ctx.fill();
  }
}

function warnas(param) {
  warna = param;
  color.style.background = param;
}

function clearRecord() {
  ctx.fillStyle = "white";
  if (temp_canv) {
    ctx.putImageData(temp_canv, 0, 0);
  } else {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function clear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  temp_canv = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function download() {
  var anchor = document.createElement("a");
  // var img = canvas.toDataURL("image/png");
  // document.write('<img src="'+img+'"/>');
  anchor.href = canvas.toDataURL("image/png");
  anchor.download = "IMAGE.PNG";
  anchor.click();
}
