var ball;
var dataBase;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    dataBase = firebase.database()
    var positiondb = dataBase.ref("pos")
    positiondb.on("value",readPosition)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   // ball.x = ball.x + x;
  // ball.y = ball.y + y;
 
  dataBase.ref("pos").set(
    {
        x:position.x+x,
        y:position.y+y
    }
  )
}


function readPosition(data){
    position=data.val();

    ball.x= position.x;
    ball.y= position.y;
}