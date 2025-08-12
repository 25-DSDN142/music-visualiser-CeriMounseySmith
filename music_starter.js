//START HERE - start working here

//canvas size is auto set to a resolution of 540x960

//  var Xmove =1;
//  var Ymove = 10;
//  var col = 0;'
let sunY = 350;
let sunSize= 200;
let sunX = 350;
let centerX=270;
let centerY=480;
let topLeft=0;
let topRight=540;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
//background(20)


////////////////loops PBA
colorMode(HSB,100);
background(255);
rectMode(CENTER);
strokeWeight(9);
stroke(bass,80,80);
//strokeFill(255);
let drumMap=map(drum,0,100,30,90);
let lengthOfLine=300;
let lineStart=100;
let lineEnd = lineStart+lengthOfLine;

if(drumMap>50){
ellipse(lineStart,lineEnd,drum)
ellipse(lineStart+50,lineEnd,drum)
ellipse(lineStart+100,lineEnd,drum)
ellipse(lineStart+150,lineEnd,drum)
ellipse(lineStart+200,lineEnd,drum)

}


// for(let i=1; i<=drumMap; i=i+1 );{ 
//     let lineStep=1*20;
// line(lineStart,lineStep,lineEnd,lineStep);

//  }



//can be useful to use but dont use rn//vidloops min 3 :30
// if(drumMap>50){
    
// }







// ///////////////////////////////////

// //                      50 being smallest itll be and 400 max itll be
// sunSize= map(drum,0,100,50,400);
// //change back to just vocal/drum/bass/other to change back to what you had before
// // e.g. sunSize=vocal
// beachSize=map(bass,0,100,800,1000);
// petalSize=map(drum,0,100,10,200);
// fill(255,255,0); //yellow
// ellipse(sunX,sunY,sunSize);
// if(sunSize>200){
//     fill(255,192,203)//lightpink
//     ellipse(sunX,sunY,sunSize);
//     ellipse(sunX-100,sunY+100,petalSize)
//     ellipse(sunX+100,sunY+100,petalSize)
//     ellipse(sunX-100,sunY-100,petalSize)
//     ellipse(sunX+100,sunY-100,petalSize)
// }
// if(petalSize>50){
//     fill(255,255,0);
//     ellipse(sunX-150,sunY+150,petalSize-100)
// }
// fill(255,255,0);
// ellipse(270,1200,beachSize);



//moving it around
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




///////////////////////stuff that was already here
// let bar_spacing = height / 10; // space between each height
// let bar_height = width / 12;   //width of bar
// let bar_pos_x = width / 2;     // bar position
 
   
// // // changes 
// //    // // vocal bar is red
// fill(172, 120, 186);// lavendar
// rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height); //* is xtimes
//  fill(0);
// text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
// //    // // drum bar is green
// fill(235, 195, 106);//light yellow
// rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//  fill(0);
//  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
// //    // // bass bar is blue
//  fill(250,158,28);//orange
//  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//  fill(0);
//  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
// //    // // other bar is white
//  fill(250,128,114);//pink
//  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//  fill(0);
//  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//  fill(255, 255, 0);
 
//    // // display "words"
// textAlign(CENTER); // aligned in center
// textSize(vocal);  // based on vocal
// text(words, width/2, height/3); // words variable makes text appear
}
