//START HERE - start working here

//canvas size is set to 1500 x 1000

let middleX = 750
let middleY = 500
let uprightX = 1200
let uprightY = 300
let upleftX = 300
let upleftY = 300
let btmleftX = 300
let btmleftY = 700
let btmrightX = 1200
let btmrightY = 700

//  var Xmove =1;
//  var Ymove = 10;
//  var col = 0;'
let sunY = 350;
let sunSize= 200;
let sunX = 350;
let centerX=750;
let centerY=500;
let petalWidth = 300
let petalHeight = 100
let tinyCircle = 20
let medCircle = 40

let topLeft=0;
let topRight=540;


// let r= map(vocal,0,100,0,255);
// let g= map(vocal,0,100,0,255);
// let b= map(vocal,0,100,0,255);
// let col = r+g+b 



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(255,181,100);//yellow
fill(248,93,0);//orange
strokeWeight(10)
stroke(255,181,100)
//////////////////////boarder (frame)
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
/////////////////////frame decorations
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


///////////////inside flower motif decorations
wider = map(drum,0,100,0,80);
taller = map(drum,0,100,0,80);



ellipse(middleX-200,middleY,petalWidth+wider,petalHeight);//center flower
ellipse(middleX+200,middleY,petalWidth+wider,petalHeight);
ellipse(middleX,middleY-200,petalHeight,petalWidth+wider);
ellipse(middleX,middleY+200,petalHeight,petalWidth+wider);
// 50 being smallest itll be and 400 max itll be
sunSize= map(drum,0,100,10,100);
// //change back to just vocal/drum/bass/other to change back to what you had before
// // e.g. sunSize=vocal
beachSize=map(bass,0,100,800,1000);
petalSize=map(drum,0,100,10,200);
fill(248,93,0); //orange
ellipse(centerX,centerY,sunSize);
if(sunSize>40){
fill(240,134,134)//lightpink
rotate(45);
ellipse(middleX+125,middleY-400,50,150);
ellipse(900,-450,50,150);
ellipse(640,-175,150,50);
ellipse(1150,-200,150,50);
rotate(315);
 }
if(petalSize>60){
    ellipse(centerX+100,centerY,tinyCircle);
    ellipse(centerX-100,centerY,tinyCircle);
    ellipse(centerX,centerY-100,tinyCircle);
    ellipse(centerX,centerY+100,tinyCircle);
}
if(sunSize>30){
ellipse(centerX+200,centerY,sunSize);
ellipse(centerX-200,centerY,sunSize);
ellipse(centerX,centerY+200,sunSize);
ellipse(centerX,centerY-200,sunSize);
}
if(petalSize>60){
    fill(145,132,80)
    ellipse(centerX+300,centerY,tinyCircle);
    ellipse(centerX-300,centerY,tinyCircle);
    ellipse(centerX,centerY-300,tinyCircle);
    ellipse(centerX,centerY+300,tinyCircle);
}




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





//rect(202,200,202,202);
// ////////////////loops PBA
// colorMode(HSB,100);
// background(255);
// rectMode(CENTER);
// strokeWeight(9);
// stroke(bass,80,80);
// // //strokeFill(255);
// let drumMap=map(drum,0,100,30,90);
// let lengthOfLine=300;
// let lineStart=100;
// let lineEnd = lineStart+lengthOfLine;

// if(drumMap>50){
// ellipse(lineStart,lineEnd,drum)
// ellipse(lineStart+50,lineEnd,drum)
// ellipse(lineStart+100,lineEnd,drum)
// ellipse(lineStart+150,lineEnd,drum)
// ellipse(lineStart+200,lineEnd,drum)

// }


// for(let i=1; i<=drumMap; i=i+1 );{ 
//    let lineStep=1*20;
// line(lineStart,lineStep,lineEnd,lineStep);

//   }

// // if(drumMap>50){
    
// // }








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
