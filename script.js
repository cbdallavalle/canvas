var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = 200;
var dx = 4;
var radius = 30;
var y = 200;
var dy = 4;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = 'pink';
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx
  }

  if(y + radius > innerHeight || y - radius < 0) {
    dy = -dy
  }

  x += dx;
  y += dy;
}

animate();





// c.fillStyle = 'pink';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'red';
// c.fillRect(200, 200, 200, 200);

// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = 'blue';
// c.stroke();

//Arc/Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'green';
// c.stroke();


// var colorArr = ['blue', 'green', 'red', 'pink', 'black', 'cyan', 'lavendar'];

// for(var i = 0; i < 100; i++) {
//   var rgbNum1 = Math.floor(Math.random() * 244);
//   var rgbNum2 = Math.floor(Math.random() * 244);
//   var rgbNum3 = Math.floor(Math.random() * 244);
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = `rgba(${rgbNum1}, ${rgbNum2}, ${rgbNum3}, 1)`;
// // var index = Math.floor(Math.random() * 7);
//   // c.strokeStyle = colorArr[index];
//   c.stroke();
// }