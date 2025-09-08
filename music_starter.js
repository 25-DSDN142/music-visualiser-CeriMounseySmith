//canvas size is set to 1500 x 1000

//variables
let middleX = 750//location variables
let middleY = 500//location variables
let sunSize= 200;//sunSize is the middle orange circle
let sunX = 350;//center circle 
let sunY = 350;//center circle 
let centerX=750;//center of canvas
let centerY=500;//center of canvas
let petalWidth = 300//petal sizes
let petalHeight = 100//petal sizes
let tinyCircle = 20//tiny green circle close to edge of petals
let medCircle = 40//middle circle on petal
let smallpetalW = 150//petal sizes
let smalpetalH = 50//petal sizes


function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(255,181,100);//dark yellow
fill(248,93,0);//orange

//pink flower petals behind main motif
evenWider = map(drum,0,20,40,150);//makes shape extra wider
quiteWide = map(drum,0,20,40,80);//makes shape slightly wider
strokeWeight(0)
stroke(255,181,100)//yellow
fill(240,134,134)
ellipse(middleX-200,middleY,petalWidth+evenWider,petalHeight+40);//behind center flower petals
ellipse(middleX+200,middleY,petalWidth+evenWider,petalHeight+40);
ellipse(middleX,middleY-200,petalHeight+40,petalWidth+quiteWide);
ellipse(middleX,middleY+200,petalHeight+40,petalWidth+quiteWide);
strokeWeight(10)


//border (frame)
fill(248,93,0);//orange
strokeWeight(10)
stroke(145,132,80)//green
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
let pointTop = map(bass,0,100,40,150);//makes point go down
let pointBtm = map(bass,0,100,960,850);//makes point go up
let pointLeft= map(bass,0,100,40,200);//makes point go right
let pointRight = map(bass,0,100,1460,1300);//makes point go left

stroke(145,132,80)//green
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
vertex(pointLeft+50,500);
vertex(0,600);
endShape(CLOSE);
beginShape();//right green triangle
vertex(pointRight-50,500);
vertex(1500,400);
vertex(1500,600);
endShape(CLOSE);
fill(240,134,134);//top left pink triangle
beginShape();
vertex(540,0);
vertex(590,pointTop-50);
vertex(640,0);
endShape(CLOSE);
beginShape();//top right pink triangle
vertex(860,0);
vertex(910,pointTop-50);
vertex(960,0);
endShape(CLOSE);
beginShape();//bottom left pink triangle
vertex(540,1000);
vertex(590,pointBtm+50);
vertex(640,1000);
endShape(CLOSE);
beginShape();//bottom right pink triangle
vertex(860,1000);
vertex(910,pointBtm+50);
vertex(960,1000);
endShape(CLOSE);
stroke(10);
stroke(145,132,80)//green
fill(255,209,157);//top left light yellow triangle
strokeWeight(10);
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
strokeWeight(10);
beginShape();//left top yellow triangle
vertex(0,300);
vertex(0,400);
vertex(pointLeft-70,350);
endShape(CLOSE);
beginShape();//left bottom yellow triangle
vertex(0,700);
vertex(0,600);
vertex(pointLeft-70,650);
endShape(CLOSE);
beginShape();//right top yellow triangle
vertex(1500,300);
vertex(pointRight+70,350);
vertex(1500,400);
endShape(CLOSE);
beginShape();//right bottom yellow triangle
vertex(1500,600);
vertex(pointRight+70,650);
vertex(1500,700);
endShape(CLOSE);
stroke(255,181,100)//yellow

//center flower motif & innner decorations
let wider = map(drum,0,100,0,80);//makes petals change shape
let circle = map(vocal,0,100,10,100);//makes circles not on petals change shape


strokeWeight(10)
fill(255,209,157)
ellipse(middleX-200,middleY,petalWidth+wider,petalHeight);//center flower petals
ellipse(middleX+200,middleY,petalWidth+wider,petalHeight);
ellipse(middleX,middleY-200,petalHeight,petalWidth+wider);
ellipse(middleX,middleY+200,petalHeight,petalWidth+wider);


let sunSize=map(drum,0,100,10,100);//middle circle chanegr
let petalSize=map(drum,0,100,10,200);//big light yellow petals

fill(248,93,0); //orange
strokeWeight(10);
stroke(255,209,157)
ellipse(centerX,centerY,sunSize);
strokeWeight(0);

if(sunSize>40){
fill(255,209,157)//yellow
rotate(45);
ellipse(middleX+125,middleY-400,50,150);//smaller diagonal flower petals
ellipse(900,-450,50,150);
ellipse(640,-175,150,50);
ellipse(1150,-200,150,50);
rotate(315);
 }

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

ellipse(centerX+475,centerY,circle+30);//circles by bass controlled triangles
ellipse(centerX-475,centerY,circle+30);

rotate(45);
ellipse(middleX+125,middleY-400,50,150);//smaller diagonal flower petals//part2
ellipse(900,-450,50,150);
ellipse(640,-175,150,50);
ellipse(1150,-200,150,50);
rotate(315);

}
