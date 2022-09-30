function preload() {

}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    capture = createCapture(VIDEO);
    capture.hide();

    pN = ml5.poseNet(capture, VideoLoaded);
    pN.on('pose', gotPOSES);
}

function draw() {
    image(capture, 0, 0, 380, 380);

}

function VideoLoaded(){
    console.log("Your video has been loaded!");
}

function gotPOSES(pose_result){
    console.log(pose_result);
}

function Take_MP() {

}