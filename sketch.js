
let phrase = ["So what do you see here"
,"Very Good, Now this one"
,"How about this one"
,"And here?"
,"There are no right or wrong answers here"
,"And how about this one"
,"Ok, Let me make sure that I heard you right, did you just say the warm welcoming hand of Satan?"];

let randomIndex;
let animating = false;
let button;
let ink;

function preload(){

	ink = loadImage("assets/IMG_" + int(random(0, 6)) + ".jpg")
}

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(26);
  imageMode(CENTER);


button = createButton("View Blots");
button.mousePressed(buttonPressed);
//after 1 sec, it will call the function the change the backgound color
//set Timeout(changeBackground, 1000);
//1000 = 1 second 

}


function draw() {

	if(animating == true){
		square(random(width), random(height), random(50, 200))
	}

}

function randomizer(){
	animating = false;

if (phrase[0]){

	background(random(200, 255));
	randomIndex = int(random(phrase.length));
	text(phrase[randomIndex], 50, 50);
	//text(hats[randomIndex].type + " which is colored " + hats[randomIndex].color, 50, 50);
	image(ink, width/4, height/4)
	
	phrase.splice(randomIndex,1);
} else {
	background(random(200,255));
	text("No more hats.", 50, 50);
	}
}


function buttonPressed(){

	animating = true;
	setTimeout(randomizer, 2000);
// if (dogs[0]){

// 	background(random(200, 255));
// 	randomIndex = int(random(hats.length));
// 	text(hats[randomIndex].type, 50, 50);
// 	hats.splice(randomIndex,1);
// 	} else {
// 	background(random(200,255));
// 	text("No more hats.", 50, 50);
// 	}
}