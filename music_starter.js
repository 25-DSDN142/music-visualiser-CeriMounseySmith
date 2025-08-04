//START HERE - start working here
 var Xmove =1;
 var Ymove = 10;
 var col = 0;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(col);

col=map(mouseX, 0,600,0,255);

  fill(250,118,222);
ellipse( mouseX,200,64,64);





  //   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(24);

ellipse(10+Xmove,100,45,45);

Xmove = Xmove +10;

if(Xmove>550){
Xmove=0;
 }

ellipse(50,10+Ymove,10,30)
Ymove = Ymove +20
if(Ymove>1000){
Ymove=0;
}












   // let bar_spacing = height / 10; // space between each height
   // let bar_height = width / 12;   //width of bar
   // let bar_pos_x = width / 2;     // bar position
 
   
// changes 
   // // vocal bar is red
   // fill(172, 120, 186);// lavendar
   // rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height); //* is xtimes
   // fill(0);
   // text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // // drum bar is green
   // fill(235, 195, 106);//light yellow
   // rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   // fill(0);
   // text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // // bass bar is blue
   // fill(250,158,28);//orange
   // rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   // fill(0);
   // text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // // other bar is white
   // fill(250,128,114);//pink
   // rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   // fill(0);
   // text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   // fill(255, 255, 0);
 
   // // display "words"
   // textAlign(CENTER); // aligned in center
   // textSize(vocal);  // based on vocal
   // text(words, width/2, height/3); // words variable makes text appear
}



// let sunY = 350;
// fill(255,255,0); //yello
// ellipse(300,sunY,50
// sunY = sunY +1
// if(sunY>1000){
// sunY = 0 

// }

// console.log(sunY)