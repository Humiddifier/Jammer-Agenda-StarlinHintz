//functionality
let counter = 0;

//background image 
let flood;

//images to cycle through
//main
let cover;
let inside;
let mural;

//inside icons
let cattailDevil1;
let pentlands;
let natorn;
let dirtBear
let penthouse;
let bigBlue;  

//encyclopedia
let cattailBio;


function preload() {
flood = createImg('Flood.jpg','image taken in wildnerness park 2019 during high floodings in nebraska');
  
cover = createImg('cover.png', 'the front cover of the jammer agenda.');
inside = createImg('inside.png', 'the inside of the jammer agenda, made of aluminum cans, and filled with an encyclopedia of cattail devil defintions');
mural = createImg('mural.PNG', 'a detailed mural illustrating the story "Grasp of Natorn"');
  
cattailDevil1 = createImg('cattailDevil.png','a grey outline of a cattail devil');
  
cattailBio = createImg('cattailDBio.png','bio about the Cattail Devils and details about their existance');
}

function setup() {
  noCanvas();
  
}

function draw() {
  //hide all images until show is called in counter
  flood.hide();
  cover.hide();
  inside.hide();
  mural.hide();
  
  cattailDevil1.hide();
  
  cattailBio.hide();
  
  //the magic begins
  if (counter == 0) {
  imageMode(CENTER);
  flood.show()
  flood.size(windowWidth,windowHeight);
  flood.position(0,0);
  cover.show();
  cover.size(450,650);
  cover.position(windowWidth/2-200,windowHeight/2-330)
  
  //credits 
  // let credits = createButton('By Elliot/Iris Starlin-Hintz');
  // credits.style('font-size', '16px');
  // credits.style('color','#ffffff');
  // credits.position(windowWidth/2-100, windowHeight-100);
    
  }
  if (counter == 1) {
  flood.show()
  flood.size(windowWidth,windowHeight);
  flood.position(0,0);
  
  inside.show();
  inside.size(828,650);
  inside.position(windowWidth/2-600,windowHeight/2-330);
  
  imageMode(CENTER);
  //icons 
  
  cattailDevil1.mouseOver(showCDBio);
  cattailDevil1.show();
  cattailDevil1.size(301,289);
  cattailDevil1.position(200,200);
  
  cattailBio.size(1000,1000);
  cattailBio.position(100,100)
  
  }
  if (counter == 2) {
  mural.show();
  mural.size(1817.5,834);
  
  }
function showCDBio() {
  cattailBio.show();
}
}
function mousePressed() {
  counter++;
  if (counter > 2) {
    counter = 0;
  }
  print('counter = ' + counter);
}