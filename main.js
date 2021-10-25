function preload() {

}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    
    
}

function draw() {
    image(video,0,0,640, 480);
   fill(0,0,255);
   stroke(0,0,255);
   circle(50,50,80);
   circle(50,450,80);
   circle(590,50,80);
   circle(590,450,80);
   rect(90,40,460,20);
   rect(90,450,460,20);
   rect(590,50,20,400);
   rect(50,50,20,400);
}
function take_snapshot(){
    save('student_name.png');
}

