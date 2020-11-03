context=document.querySelector("canvas").getContext("2d");
const score=document.getElementById("score");
let boll;
let coin;
let number=0;
let enemy;

boll={
    sAngle:0,
    eAngle:2*Math.PI,
    r:40,
    x:400,
    y:300,
};

coin={
    sAngle:0,
    eAngle:2*Math.PI,
    r:15,
    x:650,
    y:200
};

enemy={
  sAngle:0,
  eAngle:2*Math.PI,
  r:45,
  x:50,
  y:50,
};

function loop(){

    context.fillStyle="white"
    context.fillRect(0, 0, 800, 600);
    context.fillStyle="black"
    context.beginPath();
    context.arc(boll.x, boll.y, boll.r, boll.sAngle, boll.eAngle)
    context.fill();

    context.fillstyle="gold"
    context.beginPath();
    context.arc(coin.x, coin.y, coin.r, coin.sAngle, coin.eAngle)
    context.fill();

    context.fillstyle="red"
    context.beginPath();
    context.arc(enemy.x, enemy.y, enemy.r, enemy.sAngle, enemy.eAngle)
    context.fill();

    if(circleOverlap(boll.x, boll.y, boll.r, coin.x, coin.y, coin.r)){
      coin.x=Math.random()*780;
      coin.y=Math.random()*580;
      number++;
    }

    if(enemy.x < boll.x){
      enemy.x ++;
    }
    if(enemy.x > boll.x){
      enemy.x --;
    }
    if(enemy.y < boll.y){
      enemy.y ++;
    }
    if(enemy.y > boll.y){
      enemy.y --;
    }

    if(circleOverlap(boll.x, boll.y, boll.r, enemy.x, enemy.y, enemy.r)){
      alert("Game Over! You scored " + number)
    }

    score.textContent=number;
    window.requestAnimationFrame(loop);
};

function circleOverlap(x1, y1, radius1, x2, y2, radius2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < (radius1 + radius2);
}



window.requestAnimationFrame(loop);


window.onkeydown = function(event) {
  event.preventDefault()
  if(event.keyCode == 40) {
    boll.y += 10
  } else if(event.keyCode == 38) {
    boll.y -= 10  
  } else if(event.keyCode == 39) {
    boll.x += 10   
  } else if(event.keyCode == 37) {
    boll.x -= 10      
  } 
}




/*
let c = document.getElementById("boll");
let ctx = c.getContext("2d");


ctx.beginPath();
ctx.arc(745, 300, 40, 0, 2 * Math.PI);
ctx.stroke();
mmmmmmmmmmmmmmmmmmmmm
context=document.querySelector("canvas").getContext("2d");

boll={
    height:50,
    width:50,
    x:800,
    y:300,
};

loop=function(){
    boll.x --;
    context.fillStyle="black"
    context.beginPath();
    context.arc(750, 300, 40, 0, 2 * Math.PI);
    context.fill();

    if(boll.x > 800){
        boll.x=boll.width;
    }

    window.requestAnimationFrame(loop);
};

window.requestAnimationFrame(loop);
*/