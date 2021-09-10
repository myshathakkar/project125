    leftWristx=0
    rightWristx=0
    diffrence=0
    function setup(){
    video=createCapture(VIDEO)
    video.size(550, 400)
    canvas=createCanvas(550,400)
    canvas.position(590,190)

    poseNet=ml5.poseNet(video,model_loaded)
    poseNet.on("pose",got_poses)
}
function model_loaded(){
    console.log("model loaded")
}
function got_poses(results){
if(results.length>0){
    console.log(results)
    leftWristx=results[0].pose.leftWrist.x
    rightWristx=results[0].pose.rightWrist.x  
    diffrence=floor(leftWristx-rightWristx)

}
}
function draw(){
    background("#f7f106")
    textSize(diffrence)
    fill('#042df0')
    text("Mysha",20,200)
    document.getElementById("size1").innerHTML="The font size of the text is " +diffrence+" px"
}