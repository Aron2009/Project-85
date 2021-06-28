canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_x=10;
car_y=10;
car=100;
car=90;
background_image="parkingLot.jpg"
car_image="car2.png";
function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;
    car=new Image();
    car_img.onload=showCar();
    car_img.src=car_image;
}
function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function showCar(){
    ctx.drawImage(car_img, car_x, car_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
}
function up(){
if(rover_y>=0){
    rover_y-=10;
    uploadBackground();
    uploadRover();
}
}
function down(){
    if(rover_y<=500){
        rover_y+=10;
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x-=10;
        uploadBackground();
       uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x+=10;
        uploadBackground();
        uploadRover();
    }
}