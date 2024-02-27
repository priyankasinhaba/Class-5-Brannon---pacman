var GameState = "wait"
var wall1,wall2,wall3,wall4,Player;
var score = 0;

function preload(){
    Menu_Screen = loadImage('i.gif');

}
function setup(){
    createCanvas(600,600)
 
    Play_Button = createImg('start_button-removebg-preview.png')
    About_Button = createImg('question_mark-removebg-preview.png')
    Play_Button.position (150,200)
    About_Button.position (162,300)
    About_Button.size (75,75)
    Play_Button.size (100,50)


// boundary walls
wall1 = createSprite(30,300,10,550)
wall1.shapeColor = "orange";
wall2 = createSprite(300,25,550,10)
wall2.shapeColor = "blue";
wall3 = createSprite(300,580,550,10)
wall3.shapeColor = "pink";
wall4 = createSprite(570,300,10,550)
wall4.shapeColor = "black";

//player and enemy
Player = createSprite(200,200,17,17)
Player.shapeColor = "red"
Player.velocityX=4
Player.velocityY=-4;  
enemy = createSprite(100,200,17,17)
enemy.shapeColor = "blue"
enemy.velocityX=1
enemy.velocityY=-1; 
enemy2 = createSprite(100,350,17,17)
enemy2.shapeColor = "orange"
enemy2.velocityX=2
enemy2.velocityY=-2; 

wall5 = createSprite(300,300,160,10)
wall5.shapeColor = "black";
wall6 = createSprite(300,350,160,10)
wall6.shapeColor = "black";
wall7 = createSprite(255,250,10,100)
wall7.shapeColor = "black";
wall8 = createSprite(255,400,10,100)
wall8.shapeColor = "black";
wall9 = createSprite(345,250,10,100)
wall9.shapeColor = "black";
wall10 = createSprite(345,400,10,100)
wall10.shapeColor = "black";
wall11 = createSprite(180,200,160,10)
wall11.shapeColor = "black";
wall12 = createSprite(225,450,100,10)
wall12.shapeColor = "black";
wall13 = createSprite(375,200,160,10)
wall13.shapeColor = "black";
wall14 = createSprite(375,450,100,10)
wall14.shapeColor = "black";
wall15 = createSprite(180,250,10,100)
wall15.shapeColor = "black";
wall16 = createSprite(180,400,10,100)
wall16.shapeColor = "black";
wall17 = createSprite(420,250,10,100)
wall17.shapeColor = "black";
wall18 = createSprite(420,400,10,100)
wall18.shapeColor = "black";
wall19 = createSprite(490,323,10,400)
wall19.shapeColor = "black";
wall20 = createSprite(100,330,10,490)
wall20.shapeColor = "black";

coin1 = createSprite(40,100,10,10)
coin1.shapeColor = "yellow";
coin2 = createSprite(80,230,10,10)
coin2.shapeColor = "yellow";
coin3 = createSprite(120,430,10,10)
coin3.shapeColor = "yellow";
coin4 = createSprite(270,330,10,10)
coin4.shapeColor = "yellow";
coin5 = createSprite(350,330,10,10)
coin5.shapeColor = "yellow";



}
function draw(){
   

if (GameState == "wait")
{background(Menu_Screen);
Play_Button.show();
About_Button.show();
Player.visible = false;
wall1.visible = false;
wall2.visible = false;
wall3.visible = false;
wall4.visible = false;
wall5.visible = false;
wall6.visible = false;
wall7.visible = false;
wall8.visible = false;
wall9.visible = false;
wall10.visible = false;
wall11.visible = false;
wall12.visible = false;
wall13.visible = false;
wall14.visible = false;
wall15.visible = false;
wall16.visible = false;
wall17.visible = false;
wall18.visible = false;
wall19.visible = false;
wall20.visible = false;
enemy.visible = false;
enemy2.visible = false;
}
    About_Button.mousePressed(() => {
Play_Button.hide();
About_Button.hide()
GameState = "about"
    })
    Play_Button.mousePressed(() => {
        Play_Button.hide();
        About_Button.hide()
        GameState = "play"
            })
    if (GameState == "about"){
        About_Game()
    }
if (GameState == "play"){
    
    background("white")
    Player.visible = true;
    enemy.visible = true;
    enemy2.visible = true;
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    wall5.visible = true;
    wall6.visible = true;
    wall7.visible = true;
    wall8.visible = true;
    wall9.visible = true;
    wall10.visible = true;
    wall11.visible = true;
    wall12.visible = true;
    wall13.visible = true;
    wall14.visible = true;
    wall5.visible = true;
    wall6.visible = true;
    wall17.visible = true;
    wall18.visible = true;
    wall19.visible = true;
    wall20.visible = true;
    //wall14.visible = true;

    if (keyDown("UP_ARROW")) {
  
        Player.velocityX=0;
        Player.velocityY=-4;
       }
        if (keyDown(DOWN_ARROW)) {
          
        Player.velocityX=0;
        Player.velocityY=4;
        }
        if (keyDown(LEFT_ARROW)) {
          
        Player.velocityX=-4;
        Player.velocityY=0;
        }
        if (keyDown(RIGHT_ARROW)) {
          
        Player.velocityX=4;
        Player.velocityY=0;
        }
        
        if (keyWentUp("UP_ARROW")) {
  
            Player.velocityX=0;
            Player.velocityY=0;
           }
            if (keyWentUp(DOWN_ARROW)) {
              
            Player.velocityX=0;
            Player.velocityY=0;
            }
            if (keyWentUp(LEFT_ARROW)) {
              
            Player.velocityX=0;
            Player.velocityY=0;
            }
            if (keyWentUp(RIGHT_ARROW)) {
              
            Player.velocityX=0;
            Player.velocityY=0;
            }
   
    background("tan")
  

  Player.bounceOff(wall1);
  Player.bounceOff(wall2);
  Player.bounceOff(wall3);
  Player.bounceOff(wall4);
  Player.bounceOff(wall5);
  Player.bounceOff(wall6);
  Player.bounceOff(wall7);
  Player.bounceOff(wall8);
  Player.bounceOff(wall9);
  Player.bounceOff(wall10);
  Player.bounceOff(wall11);
  Player.bounceOff(wall12);
  Player.bounceOff(wall13);
  Player.bounceOff(wall14);
  Player.bounceOff(wall15);
  Player.bounceOff(wall16);
  Player.bounceOff(wall17);
  Player.bounceOff(wall18);
  Player.bounceOff(wall19);
  Player.bounceOff(wall20);
  //Player.bounceOff(wall18);
  enemy.bounceOff(wall1);
  enemy.bounceOff(wall2);
  enemy.bounceOff(wall3);
  enemy.bounceOff(wall4);
  enemy.bounceOff(wall5);
  enemy.bounceOff(wall6);
  enemy.bounceOff(wall3);
  enemy.bounceOff(wall4);
  enemy.bounceOff(wall5);
  enemy.bounceOff(wall6);
  enemy.bounceOff(wall7);
  enemy.bounceOff(wall8);
  enemy.bounceOff(wall9);
  enemy.bounceOff(wall10);
  enemy.bounceOff(wall11);
  enemy.bounceOff(wall12);
  enemy.bounceOff(wall13);
  enemy.bounceOff(wall14);
  enemy.bounceOff(wall15);
  enemy.bounceOff(wall16);
  enemy.bounceOff(wall17);
  enemy.bounceOff(wall18);
  enemy.bounceOff(wall19);
  enemy.bounceOff(wall20)


  enemy2.bounceOff(wall1);
  enemy2.bounceOff(wall2);
  enemy2.bounceOff(wall3);
  enemy2.bounceOff(wall4);
  enemy2.bounceOff(wall5);
  enemy2.bounceOff(wall6);
  enemy2.bounceOff(wall3);
  enemy2.bounceOff(wall4);
  enemy2.bounceOff(wall5);
  enemy2.bounceOff(wall6);
  enemy2.bounceOff(wall7);
  enemy2.bounceOff(wall8);
  enemy2.bounceOff(wall9);
  enemy2.bounceOff(wall10);
  enemy2.bounceOff(wall11);
  enemy2.bounceOff(wall12);
  enemy2.bounceOff(wall13);
  enemy2.bounceOff(wall14);
  enemy2.bounceOff(wall15);
  enemy2.bounceOff(wall16);
  enemy2.bounceOff(wall17);
  enemy2.bounceOff(wall18);
  enemy2.bounceOff(wall19);
  enemy2.bounceOff(wall20);

 
  if(Player.isTouching(enemy)){
    Player.remove();
    GameState = 'lose';
  }
  if(Player.isTouching(enemy2)){
    Player.remove();
    GameState = 'lose';
    
  }

  if(Player.isTouching(coin1)){
    coin1.remove();
    score = score+1;
    
  }
  if(Player.isTouching(coin2)){
    coin2.remove();
    score = score+1;
    
  }

  if(Player.isTouching(coin3)){
    coin3.remove();
    score = score+1;
    
  }

  if(Player.isTouching(coin4)){
    coin4.remove();
    score = score+1;
    
  }
  if(Player.isTouching(coin5)){
    coin5.remove();
    score = score+1;
    
  }
    
  
  
}
drawSprites();
text ("Score: " +score, 20, 30)
if(GameState == 'lose'){
    enemy.velocityX=0;
    enemy.velocityY=0;
    enemy2.velocityX=0;
    enemy2.velocityY=0;
    textSize(50);
    strokeWeight(4)
    fill("white")
    text("GAME OVER",200,200)
  
   }
}
function About_Game(){
    swal({
title:"About Game",
text:"kill all the enemies visible to win the game",
textAlign:"centre",
//imageUrl:"",
//imageSize:"",
confirmButtonText:"kill all enemies",
confirmButtonColor:"green",

    },
    function(){
        GameState = "wait"
    })
}

