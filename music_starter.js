//canvas size is set to 1500 x 1000

//variables
let middleX = 750//location variables
let middleY = 500
let uprightX = 1200
let uprightY = 300
let upleftX = 300
let upleftY = 300
let btmleftX = 300
let btmleftY = 700
let btmrightX = 1200
let btmrightY = 700
let topLeft=0;
let topRight=540;

let sunSize= 200;//sunSize is the middle orange circle
let sunX = 350;
let sunY = 350;

let centerX=750;//center of canvas
let centerY=500;//center of canvas
let petalWidth = 300
let petalHeight = 100
let tinyCircle = 20//tiny green circle close to edge of petals
let medCircle = 40//middle circle on petal


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(255,181,100);//yellow
fill(248,93,0);//orange
strokeWeight(10)
stroke(255,181,100)

//border (frame)
rect(0,0,100,1000);//left frame piece
rect(1400,0,1000,1500)//right frame piece
beginShape();//top frame piece
vertex(0,0);
vertex(100,100);
vertex(1400,100);
vertex(1500,0);
endShape(CLOSE);
beginShape();// bottom frame piece
vertex(0,1000);
vertex(100,900);
vertex(1400,900);
vertex(1500,1000);
endShape(CLOSE);

//frame decorations//triangles
pointTop = map(bass,0,100,40,150);
pointBtm = map(bass,0,100,960,850);
pointLeft= map(bass,0,100,40,200)
pointRight=map(bass,0,100,1460,1300)
fill(145,132,80);//top green triangle
beginShape();
vertex(650,0);
vertex(750,pointTop);
vertex(850,0);
endShape(CLOSE);
beginShape();//bottom green triangle
vertex(650,1000);
vertex(750,pointBtm);
vertex(850,1000);
endShape(CLOSE);
beginShape();//left green triangle
vertex(0,400);
vertex(pointLeft,500);
vertex(0,600);
endShape(CLOSE);
beginShape();//right green triangle
vertex(pointRight,500);
vertex(1500,400);
vertex(1500,600);
endShape(CLOSE);
fill(240,134,134);//top left pink triangle
beginShape();
vertex(540,0);
vertex(590,60);
vertex(640,0);
endShape(CLOSE);
fill(240,134,134);//top right pink triangle
beginShape();
vertex(860,0);
vertex(910,60);
vertex(960,0);
endShape(CLOSE);
fill(240,134,134);//bottom left pink triangle
beginShape();
vertex(540,1000);
vertex(590,940);
vertex(640,1000);
endShape(CLOSE);
fill(240,134,134);//bottom right pink triangle
beginShape();
vertex(860,1000);
vertex(910,940);
vertex(960,1000);
endShape(CLOSE);
fill(255,209,157);//top left light yellow triangle
strokeWeight(0);
beginShape();
vertex(220,0);
vertex(270,50);
vertex(320,0);
endShape(CLOSE);
beginShape();//bottom left light yellow triangle
vertex(220,1000);
vertex(270,950);
vertex(320,1000);
endShape(CLOSE);
beginShape();//top right light yellow triangle
vertex(1280,0);
vertex(1230,50);
vertex(1180,0);
endShape(CLOSE);
beginShape();//bottom right light yellow triangle
vertex(1280,1000);
vertex(1230,950);
vertex(1180,1000);
endShape(CLOSE);
//frame decorations//added line details







//center flower motif & innner decorations
wider = map(drum,0,100,0,80);
circle = map(vocal,0,100,10,100);

ellipse(middleX-200,middleY,petalWidth+wider,petalHeight);//center flower petals
ellipse(middleX+200,middleY,petalWidth+wider,petalHeight);
ellipse(middleX,middleY-200,petalHeight,petalWidth+wider);
ellipse(middleX,middleY+200,petalHeight,petalWidth+wider);

sunSize= map(drum,0,100,10,100);
beachSize=map(bass,0,100,800,1000);
petalSize=map(drum,0,100,10,200);
fill(248,93,0); //orange
ellipse(centerX,centerY,sunSize);
if(sunSize>40){
fill(255,209,157)//yellow
rotate(45);
ellipse(middleX+125,middleY-400,50,150);//smaller diagonal flower petals
ellipse(900,-450,50,150);
ellipse(640,-175,150,50);
ellipse(1150,-200,150,50);
rotate(315);
 }
ellipse(centerX+315,centerY+275,circle);


if(petalSize>60){
    ellipse(centerX+100,centerY,tinyCircle);//central most circles in petals
    ellipse(centerX-100,centerY,tinyCircle);
    ellipse(centerX,centerY-100,tinyCircle);
    ellipse(centerX,centerY+100,tinyCircle);
}

if(sunSize>30){
ellipse(centerX+200,centerY,sunSize);//middle circles in petals
ellipse(centerX-200,centerY,sunSize);
ellipse(centerX,centerY+200,sunSize);
ellipse(centerX,centerY-200,sunSize);
}
if(bass>48){
    fill(145,132,80)
    ellipse(centerX+300,centerY,tinyCircle);//outer most circles in petals
    ellipse(centerX-300,centerY,tinyCircle);
    ellipse(centerX,centerY-300,tinyCircle);
    ellipse(centerX,centerY+300,tinyCircle);
}


//moving it around////////////////////////////////////////////if have time
// strokeWeight(8)
// ellipse(sunX,sunY,sunSize-20);
// ellipse(sunX,sunY,sunSize-60);
// sunY = sunY+1
// sunX = sunX+1
// if(sunX>700){
//  sunX=0
// }
// if(sunY>800){
// sunY=200    
// }

rotate(315);//little top right flower
// fill(240,134,134)//pink
// ellipse(uprightX,uprightY,20,100)
// ellipse(uprightX,uprightY,100,20)
// fill(255,209,157)//light yellow
// ellipse(uprightX,uprightY,20,20)


// ellipse(upleftX,uprightY,20,20)//little top left flower
// ellipse( upleftX,uprightY-80,20,80)
// ellipse( upleftX-80,uprightY,80,20)
// ellipse( upleftX,uprightY+80,20,80)
// ellipse( upleftX+80,uprightY,80,20)

// ellipse( upleftX-60,uprightY-60,15,15)
// ellipse( upleftX+60,uprightY+60,15,15)
// ellipse( upleftX-60,uprightY+60,15,15)
// ellipse( upleftX+60,uprightY-60,15,15)

//little btm left flower
// fill(240,134,134)//pink
// ellipse(btmleftX-35,btmleftY,80,40)
// ellipse(btmleftX+35,btmleftY,80,40)
// ellipse(btmleftX,btmleftY-35,40,80)
// ellipse(btmleftX,btmleftY+35,40,80)
// fill(255,209,157)//light yellow
// ellipse( btmleftX,btmleftY, 20,20)
// ellipse(btmleftX-40, btmleftY-40,15,15)
// ellipse(btmleftX+40, btmleftY+40,15,15)
// ellipse(btmleftX-40, btmleftY+40,15,15)
// ellipse(btmleftX+40, btmleftY-40,15,15)

// //btm right flower
// ellipse(btmrightX,btmleftY,20,20)
// ellipse(btmrightX-30,btmleftY,20,20)
// ellipse(btmrightX,btmleftY-30,20,20)
// ellipse(btmrightX+30,btmleftY,20,20)
// ellipse(btmrightX,btmleftY+30,20,20)


//////////////////////////////////put in later

// //moving it around
// strokeWeight(8)
// ellipse(sunX,sunY,sunSize-20);
// ellipse(sunX,sunY,sunSize-60);
// sunY = sunY+1
// sunX = sunX+1
// if(sunX>700){
//  sunX=0
// }
// if(sunY>800){
// sunY=200    
// }

}
