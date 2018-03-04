var x1;
var y1;
var x2;
var y2;
var x3;
var y3;

function setup() {
w= displayWidth;
h= displayHeight;
colorMode(RGB);
background(0,0,255);
createCanvas(w,h);
x1=w*0.45;
y1=h*0.8;
x2=w*0.55;
y2=h*0.8;
x3=w*0.5;
y3=h*0.6;
var rainBtn= createButton('rain');
rainBtn.position(0,0);
rainBtn.size(w/10,h/10);
rainBtn.mousePressed(function(){
	stroke(0,0,0);
	
	for(var i = 0; i < 50; i++){
		var yspeed = yspeed * 0.5;
		var y = random(displayHeight);
		var x = random(displayWidth);
		var leng = random(10,20);
		stroke(0,0,255);
		line(x,y,x,y+leng);
		x=x-random(5,100);
		print(i);

	}
	x1=x1-x1*0.02;
	x2=x2+x2*0.015;	
	y3=y3-y3*0.04;





})

//rain.mousePressed(rain);
}

function draw() {






fill(139,69,19);
rect(w*0.5,h*0.75,w*0.01,h*0.1);
fill(0,255,0);
//traingle(w*0.6,h*0.60,w*0.7,h*0.60,w*0.5, h*0.65);


triangle(x1,y1,x2,y2,x3,y3); 

}





