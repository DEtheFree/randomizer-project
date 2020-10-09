
let phrase = [{type: "Tyrolean", color: "red"},{type: "Ten Gallon", color: "white"},{type: "Stenton", color: "evergreen"},{type: "Top Hat", color: "black"},{type: "Bowler", color: "black"},{type: "Fez", color: "blue"}];

let randomIndex;
let animating = false;
let button;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(26);
  imageMode(CENTER);

text("What kinds of hats do I have in my pocket?", 40, 50);

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

if (phrase[0]){

	background(random(200, 255));
	randomIndex = int(random(phrase.length));
	//text(hats[randomIndex].type + " which is colored " + hats[randomIndex].color, 50, 50);
	
	
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