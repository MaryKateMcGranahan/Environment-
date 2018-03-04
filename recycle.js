var button;

function setup() {
  w = displayWidth;
  h = displayHeight;
  createCanvas(displayWidth, displayHeight); //<canvas>
  background(0,255,0);
  yPos = h/9;
  xPos = w/2;
  score = 0;
  counter = 0;
  lives = 3;
  speed = 1;
}

function draw(){

      fill(255);
      rect(w/9, h/10, 4*w/5, 4*h/5);
      noStroke();
      rect(w/11, h/10, w/20, 4*h/5);
      rect(8*w/9, h/10, w/20, 4*h/5);

      //TRASH CAN
      fill(0);
      rect(w/10, h/2, 2*w/5, 2*h/5);
      text('Trash Can', w/4, h/2);

      //RECYCLING BIN
      fill(0,0,255);
      rect(w/2, h/2, 2*w/5, 2*h/5);
      text('Recycling Bin', 3*w/4, h/2);

      if(counter%2==0){ //TRASH
        yPos+= speed;
        if(yPos<=h/2){
          if(mouseX>w/10 && mouseX<9*w/10){
            xPos = mouseX;
          }
          else if (mouseX<w/10){
            xPos = w/10;
          }
          else if (mouseX>w/10){
            xPos = 9*w/10;
          }
          fill(100);
          ellipse(xPos, yPos, 20, 20);
        }

        else{
          if(xPos>w/10 && xPos<9*w/20){
            score++;
            speed++;
          }
          else{
            lives--;
          }
          yPos = h/9;
          counter++;
        }
    }

      else { //RECYCLING
        yPos+= speed;
        if(yPos<=h/2){
          if(mouseX>w/10 && mouseX<9*w/10){
            xPos = mouseX;
          }
          else if (mouseX<w/10){
            xPos = w/10;
          }
          else if (mouseX>w/10){
            xPos = 9*w/10;
          }
          fill(0,0,255);
          ellipse(xPos, yPos, 20, 20);
        }

        else{
          if(xPos>w/2 && xPos<9*w/10){
            score++;
                speed++;
          }
          else{
            lives--;
          }
          yPos = h/9;
          counter++;
        }
    }

      //SCORE
      text('score: ' + score, w/10, h/9);
      text('lives: ' + lives, w/10, h/8);
      text('speed: ' + speed, w/10, h/7);


    if(lives==0){
      end();

    }

    function end(){
          fill(255,0,0);
      rect(0,0, displayWidth, displayHeight);
      fill(0);
      textSize(50);
      text('GAME OVER:', w/2, h/3);
      text('you have killed the planet.', w/2, h/2);
    }
 

}