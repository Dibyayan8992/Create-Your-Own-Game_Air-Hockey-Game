var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d95a1340-6488-4043-bba8-886b0c085545"],"propsByKey":{"d95a1340-6488-4043-bba8-886b0c085545":{"name":"download.png_1","sourceUrl":"assets/v3/animations/KjuGnBXGD4EFuF74jbBMo42ultwRdhTAW2ytv4yGS8o/d95a1340-6488-4043-bba8-886b0c085545.png","frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":4,"version":"DjtQD4xMryD2yBkgul85l2DE3g4R817u","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/v3/animations/KjuGnBXGD4EFuF74jbBMo42ultwRdhTAW2ytv4yGS8o/d95a1340-6488-4043-bba8-886b0c085545.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1 = createSprite(200, 300, 400, 5);
boundary1.shapeColor = "orangered";
var boundary2 = createSprite(200, 100, 400, 5);
boundary2.shapeColor = "orangered";
var boundary3 = createSprite(380, 200, 5, 400);
boundary3.shapeColor = "orangered";
var boundary4 = createSprite(20, 200, 5, 400);
boundary4.shapeColor = "orangered";
var boundary5 = createSprite(200, 10, 400, 5);
boundary5.shapeColor = "orangered";
var boundary6 = createSprite(200, 390, 400, 5);
boundary6.shapeColor = "orangered";
var goal1 = createSprite(200, 380, 100, 20);
goal1.shapeColor = "firebrick";
var goal2 = createSprite(200, 20, 100, 20);
goal2.shapeColor = "firebrick";
var striker = createSprite(200, 200, 200, 200);
striker.setAnimation("download.png_1");
var compMallet = createSprite(200, 360, 60, 10);
compMallet.shapeColor ="black";
var playerMallet = createSprite(200, 40, 60, 10);
playerMallet.shapeColor = "teal";
var boundary7 = createSprite(4, 200, 8, 400);
boundary7.shapeColor = "blue";
var boundary8 = createSprite(396, 200, 8, 400);
boundary8.shapeColor = "blue";


// variable to store different states of game
var gameState = "serve";

var compScore = 0;
var playerScore = 0;

function draw() {
  
background("cyan");
createEdgeSprites();



 if (gameState === "serve" ) {
textSize(15);
text("Press 'Space' To Serve", 140, 150);
 }
 
 if (keyDown("space") && gameState === "serve") {
  serve();
  gameState = "play";
 }
 
 //scoreboad
 text(playerScore, 45, 175);
 text(compScore, 45, 225);
 

compMallet.x = striker.x;

striker.bounceOff(boundary5);
 
 
  if (keyDown("left")) {
  playerMallet.x = playerMallet.x-10;
 }
  
if (keyDown("right")) {
  playerMallet.x = playerMallet.x+10;
 }
 
 if (keyDown("up")) {
 if(playerMallet.y >25) {    
 playerMallet.y = playerMallet.y-10;
 }
 }
 
 if (keyDown("down")) {
  if(playerMallet.y<100){
   playerMallet.y=playerMallet.y+10;  
   }
 }
 
 
 
 //draw line in the centre
for (var i = 0; i < 400; i=i+20) {
   line(i, 200, i+10, 200);
 }


    
if (striker.isTouching(goal2)) {
 reset();
 gameState = "serve";
  compScore = compScore+1;
}

 if (striker.isTouching(goal1)) {
    reset();
    gameState = "serve";
  playerScore = playerScore+1;
  }
   if (compScore===5) {
  gameState = "over";
  playerMallet.x = 200;
  playerMallet.y = 40;
  textSize(15);
  text("Game Over", 160, 130);
  text("Press 'R' to restart", 140, 150);
}

if (playerScore===5) {
  gameState = "over";
  playerMallet.x = 200;
  playerMallet.y = 40;
  textSize(15);
  text("Game Over", 160, 130);
  text("Press 'R' to restart", 140, 150);
}

if (keyDown("r")&& gameState === "over") {
  gameState = "serve";
  compScore = 0;
  playerScore = 0;
}




 striker.bounceOff(boundary3);
striker.bounceOff(boundary4);
compMallet.bounceOff(boundary4);
compMallet.bounceOff(boundary3);
playerMallet.bounceOff(boundary4);
playerMallet.bounceOff(boundary3);
striker.bounceOff(playerMallet);
striker.bounceOff(compMallet);


drawSprites();  

}



function serve(){
striker.velocityX = 4;
striker.velocityY = -4;
}

function reset(){
  
striker.x = 200;
striker.y = 200;
striker.velocityX = 0;
striker.velocityY = 0;

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
