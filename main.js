song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("imperial march.mp3");
    song2 = loadSound("gfalls.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    //I added a canvas ID so I could style it to not come up on top of the heading and button
    canvas.id('myCanvas');
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}