function preload() {
  //load game assets
 
}
var player;
var target;
edges=createEdgeSprites();
function setup() {
  createCanvas(600,600);
  player = createSprite(40,550,10,10);
player.shapeColor='white'
target = createSprite(550,40,30,30);
target.shapeColor='pink'
obs1 = createSprite(10,265,150,19);
  obs1.shapeColor='red'
  obs2=createSprite(190,265,150,19);
  obs2.shapeColor='red'
  obs3=createSprite(370,265,150,19);
  obs3.shapeColor='red'
  obs4=createSprite(550,265,150,19);
  obs4.shapeColor='red'
  obs5 = createSprite(10,300,150,19);
  obs5.shapeColor='red'
  obs6=createSprite(190,300,150,19);
  obs6.shapeColor='red'
  obs7=createSprite(379,300,150,19);
  obs7.shapeColor='red'
  obs8=createSprite(570,300,150,19);
  obs8.shapeColor='red';
  // obs1.velocityX=4
  // obs2.velocityX=4
  // obs3.velocityX=4
  // obs4.velocityX=4
  // obs5.velocityX=4
  // obs6.velocityX=4
  // obs7.velocityX=4
  // obs8.velocityX=4

}

function draw() {  
  background('green');
  // player.bounceOff(edges[0]);
  // player.bounceOff(edges[1]);
  // player.bounceOff(edges[2]);
  // player.bounceOff(edges[3]);
  // obs1.bounceOff(edges[1]);
  // obs1.bounceOff(edges[0]);
  // obs2.bounceOff(edges[1]);
  // obs2.bounceOff(edges[0]);
  // obs3.bounceOff(edges[1]);
  // obs3.bounceOff(edges[0]);
  // obs4.bounceOff(edges[1]);
  // obs4.bounceOff(edges[0]);
  // obs5.bounceOff(edges[1]);
  // obs5.bounceOff(edges[0]);
  // obs6.bounceOff(edges[1]);
  // obs6.bounceOff(edges[0]);
  // obs7.bounceOff(edges[1]);
  // obs7.bounceOff(edges[0]);
  // obs8.bounceOff(edges[1]);
  // obs8.bounceOff(edges[0]);
  if(keyDown("up")){
    player.y=player.y-5;
  }
  if(keyDown("down")){
    player.y=player.y+5;
  }
  if(keyDown("left")){
    player.x=player.x-5;
  }
  if(keyDown("right")){
    player.x=player.x+5;
  }
  if(player.isTouching(target)){
    text("YOU WIN",200,200);
  }
  
  if(player.isTouching(obs1 || obs2 || obs3 || obs4 || obs5 || obs6 || obs7 || obs8)){
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs2 || obs2 || obs3 || obs4 || obs5 || obs6 || obs7 || obs8)){
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs3 || obs2 || obs3 || obs4 || obs5 || obs6 || obs7 || obs8)){
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs4 || obs2 || obs3 || obs4 || obs5 || obs6 || obs7 || obs8)){
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs5 || obs2 || obs3 || obs4 || obs5 || obs6 || obs7 || obs8)){
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs6 || obs2 || obs3 || obs4 || obs5 || obs6 || obs7 || obs8)){
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs7 || obs2 || obs3 || obs4 || obs5 || obs6 || obs7 || obs8)){
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs8 || obs2 || obs3 || obs4 || obs5 || obs6 || obs7 || obs8)){
    text("YOU LOSE",200,200);
  }
  drawSprites();
}
