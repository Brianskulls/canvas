let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.lineWidth = 2;
context.strokeStyle = "blue";

let r = 0;

function loopImage(){
  if(r == 0){
    //Oor
    context.beginPath();
    context.arc(60,190,60,0,2*Math.PI);
    context.fillStyle = "green";
    context.fill();
    context.stroke();
    //Oor
    context.beginPath();
    context.arc(335,190,60,0,2*Math.PI);
    context.fillStyle = "green";
    context.fill();
    context.stroke();
    r++;
    return;
  }
  if(r == 1){
    //Lichaam
    context.beginPath();
    context.arc(200,200,150,0,2*Math.PI);
    context.fillStyle = "yellow";
    context.fill();
    context.stroke();
    r++;
    return;
  }
  if(r == 2){
    //Mond
    context.beginPath();
    context.arc(200,200,100,0,1*Math.PI);
    context.fillStyle = "black";
    context.lineWidth = 5;
    context.fill();
    context.stroke();
    r++;
    return;
  }
  if(r == 3){
    //Oog
    context.beginPath();
    context.lineWidth = 2;
    context.arc(130,130,40,0,2*Math.PI);
    context.stroke();
    //Oog
    context.beginPath();
    context.arc(290,130,40,0,2*Math.PI);
    context.stroke();
    r++;
    return;
  }
  if(r == 4){
    //Pupil
    context.beginPath();
    context.arc(145,135,20,0,2*Math.PI);
    context.strokeStyle = "red";
    context.stroke();

    //Pupil
    context.beginPath();
    context.arc(275,135,20,0,2*Math.PI);
    context.stroke();
    r++;
    return;
  }
  if(r == 5){
    drawHaar(165,40,150,65);
    drawHaar(173,35,164,65);
    drawHaar(195,35,175,60);
    r++
    return;
  }
  if(r == 6){
    drawHaar(205,35,185,60);
    drawHaar(210,35,185,60);
    drawHaar(220,35,200,60);
    r++
    return;
  }
  if(r == 7){
    drawHaar(230,35,210,60);
    drawHaar(227,35,220,60);
    drawHaar(240,35,230,60);
    r++
    return;
  }
  if(r == 8){
    drawHaar(250,35,240,62);
    drawHaar(240,35,250,65);
    drawHaar(280,40,255,65);
    context.clearRect(0, 0, canvas.width, canvas.height);
    r = 0;
    return;
  }
}

function drawHaar(x, y, a, b){
  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  context.moveTo(x,y);
  context.lineTo(a,b);
  context.stroke();
}

setInterval(loopImage,500);
