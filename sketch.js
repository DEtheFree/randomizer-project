
let hats = [{type: "tyrolean", color: "red"},{type: "stenton", color: "evergreen"},{type: "top hat", color: "black"},{type: "bowler", color: "black"},{type: "fez", color: "blue"}];

let randomIndex;
let animating = false;
let button;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(26);
  imageMode(CENTER);

text("What kinds of hats do I have?", 40, 50);

button = createButton("click to randomize");
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

if (hats[0]){

	background(random(200, 255));
	randomIndex = int(random(hats.length));
	//text(hats[randomIndex].type + " which is colored " + hats[randomIndex].color, 50, 50);
	text(`${hats[randomIndex].type} which is colored 
		${hats[randomIndex].color}`, 50, 50);
	
	hats.splice(randomIndex,1);
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