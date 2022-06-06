function preload(){
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    
    fill(0, 0, 55);
    stroke(0, 128, 0);
    circle(605, 35, 70);

   

    fill(0, 0, 55);
    stroke(0, 128, 0);
    circle(40, 35, 70);

    

    fill(0, 0, 55);
    stroke(0, 128, 0);
    circle(605, 435, 70);

  

    fill(0, 0, 55);
    stroke(0, 128, 0);
    circle(40, 435, 70);

    

    fill(48, 213, 200);
    stroke(0, 128, 0);
    
    rect(40, 435, 570, 20);

    rect(40, 35, 570, 20);

    rect(40, 35, 20, 400);

    rect(605, 35, 20, 420);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}