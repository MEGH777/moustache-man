noseX = 0;
noseY = 0;


function preload(){
clown_nose = loadImage('https://postimg.cc/bsV5tR30');
}


function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{

image(video ,0,0,300,300);
// circle(noseX,noseY,20);
image(clown_nose,noseX,noseY,30,30);

}

function take_snapshot(){
	save('myfilterImage.png');
}

function modelLoaded() {
	consolde.log("PoseNet is initialized");
}

function gotPoses() {
	if(results.length > 0){
		console.log(results);
		console.log("nose y position = " + results[0].pose.nose.y);
	
	console.log("nose x position = " + results[0].pose.nose.x);

}
}