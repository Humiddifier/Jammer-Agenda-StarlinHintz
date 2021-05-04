//credit to Adam Hintz for Flood photograph!

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
let cattailDevil2;

let pentlands;
let natorn;
let burrowBear
let penthouse;
let bigHue;  

//encyclopedia
let cattailBio;
let pentlandsBio;
let natornBio;
let penthouseBio;
let burrowBearBio;
let bigHueBio;

let missing;
let missingCapt;
let hilm;
let hilmCapt;
let gossip;
let gossipCapt;
let adven;
let advenCapt;
let fall;
let fallCapt;
let connect;
let connectCapt;
let after;
let afterCapt;

let pentgif;

function preload() {
//background images
flood = createImg('Flood.jpg','image taken in wildnerness park 2019 during high floodings in nebraska');
  
cover = createImg('cover.png', 'the front cover of the jammer agenda.');
inside = createImg('inside.png', 'the inside of the jammer agenda, made of aluminum cans, and filled with an encyclopedia of cattail devil defintions');
mural = createImg('mural.png', 'a detailed mural illustrating the story "Grasp of Natorn"');

//icons counter 2
cattailDevil1 = createImg('cattailDevil.png','a grey outline of a cattail devil');
pentlands = createImg('pentlands.png','a grey outline of pentlands');
natorn = createImg('natorn.png','a grey outline of natorn the giant snake, creator of the pentlands');
burrowBear = createImg('burrowBear.png','a grey outline of large prairie dog like creatures that dig cave systems below the Pentlands');
penthouse = createImg('penthouse.png','a grey outline of penthouses where Cattail Devils live.');
bigHue = createImg('bigHue.PNG','a grey outline of big blue, an extra large grass that grows throughout the Pentlands');

//bios
cattailBio = createImg('cattailBio.jpg','bio about the Cattail Devils and details about their existance');
pentlandsBio = createImg('pentlandBio.jpg','bio about the Pentlands and diagrams showing what they look like');
natornBio = createImg('natornBio.jpg','a short summary of the mythology of Natorn and Natorns effect on Cattail Devils');
penthouseBio = createImg('penthouseBio.jpg','short description of the penthouses and how they are made, what materials they hold');
burrowBearBio = createImg('burrowBearBio.jpg','a decription about the burrow bears and how they relate to the ecology of Neobrara');
bigHueBio = createImg('bigHueBio.jpg','a summary of how big hue plays into cattail devil society and describes pickings');
  
//Mural Descriptions YAAAY
missing = createImg('missing.png','transparent image for tracking mouse')
missingCapt = createImg('missingCapt.jpg','Recently, Cattail Devils have started going missing in the Pentlands. Every night as Cattail Devils go out for their parole shifts, fewer and fewer return home.');

hilm = createImg('hilm.png','transparent image for tracking mouse');
hilmCapt = createImg('hilmCapt.jpg','An adult Cattail Devil named Hilm, keeps track of all the events in the Pentlands. As they carve into their “Jammer Agenda” (a few flattened aluminum soda cans, and a dirt soaked kool-aid jammer cover, made into a journal) they keep track of the seasons, sun cycles and the changes they notice in their community');
  
gossip = createImg('gossip.png','transparent image for tracking mouse');
gossipCapt = createImg('gossipCapt.jpg','Everyone in Neobrara is gossiping, spreading rumors that Natorn the giant snake has returned with a craving for human blood and is stealing the Cattail Devils to eat, but Hilm, and the remaining Cattail Devils, know Natorn is not man eating.');
  
adven = createImg('adven.png','transparent image for tracking mouse');
advenCapt = createImg('advenCapt.jpg','After anxiously thinking about Neobraras antagonization of Natorn, Hilm takes charge, breaking out of their nightly routine, and heading for the dangerous moonlit Pentlands. With only two rusted car headlights, sitting on their head, for light, a red glow fills the grasses. This was Hilm’s first time in the Pentlands alone, and they were starting to feel paranoid. Their mind fills with intrusions of horrible endings. What if Natorn is real, what if he’s right behind me, and I’m a prey of the snake who carved our land');
  
fall = createImg('fall.png','transparent image for tracking mouse');
fallCapt = createImg('fallCapt.jpg',' While Hilm is in deep thought, their mind wanders away from reality. Distracted from their environment, Hilm falls into a huge, deep hole, barely visible because of the large big blue grasses surrounding their view. Hilm keeps falling, but falls safely into a nest of dry big blue grasses, milky leaves, and dirt.');
  
connect = createImg('connect.png','transparent image for tracking mouse');
connectCapt = createImg('connectCapt.jpg','Recovering from the fall, Hilm brushes themself off and notices a red glow in the distance. Not knowing what else to do, Hilm runs to the glow, and notices a face in the darkness, it was a Cattail Devil!');

after = createImg('after.png','transparent image for tracking mouse');
afterCapt = createImg('afterCapt.jpg','In the end there was no Natorn, only oversized Prairie Dogs. The Cattail Devils named these large creatures, Burrow Bears. The Burrow Bears had been living under the Pentlands in an old tunnel system and just now had broken through the old concrete. Hilm was overwhelmed with joy that Natorns  legend could live on with good intent.');
  
//gif of penthouse
pentgif = createImg('pentgif.gif','a 360 view of the penthouse 3D model I made');
}

function setup() {
  noCanvas();
  
  //hide all images until called in each counter
  flood.hide();
  cover.hide();
  inside.hide();
  mural.hide();
  
  cattailDevil1.hide();
  pentlands.hide();
  natorn.hide();
  burrowBear.hide();
  penthouse.hide();
  bigHue.hide();

  cattailBio.hide();
  pentlandsBio.hide();
  natornBio.hide();
  penthouseBio.hide();
  burrowBearBio.hide();
  bigHueBio.hide();
  
  missing.hide();
  missingCapt.hide();
  hilm.hide();
  hilmCapt.hide();
  gossip.hide();
  gossipCapt.hide();
  adven.hide()
  advenCapt.hide();
  fall.hide();
  fallCapt.hide();
  connect.hide();
  connectCapt.hide();
  after.hide();
  afterCapt.hide();
  pentgif.hide();
}

function draw() {
  
  //the magic begins
  if (counter == 0) {
  imageMode(CENTER);
  missing.hide();
  missingCapt.hide();
  hilm.hide();
  hilmCapt.hide();
  gossip.hide();
  gossipCapt.hide();
  adven.hide();
  advenCapt.hide();
  fall.hide();
  fallCapt.hide();
  connect.hide();
  connectCapt.hide()
  after.hide();
  afterCapt.hide();
  pentgif.hide();
  mural.hide();
  
  flood.show()
  flood.size(windowWidth,windowHeight);
  flood.position(0,0);
  cover.show();
  cover.size(450,650);
  cover.position(windowWidth/2-200,windowHeight/2-330)
    
  }
  if (counter == 1) {
  cover.hide();
  flood.show();
  flood.size(windowWidth,windowHeight);
  flood.position(0,0);
  
  inside.show();
  inside.size(828,650);
  inside.position(windowWidth/2-600,windowHeight/2-330);
  
  imageMode(CENTER);
  //icons 
  
  //cattail devil icon
  cattailDevil1.mouseOver(showCDBio);
  cattailDevil1.mouseOut(hideCDBio);
    
  cattailDevil1.show();
  cattailDevil1.size(301,289);
  cattailDevil1.position(110,50);
 
  cattailBio.size(398,627.75);
  cattailBio.position(windowWidth/2+250, windowHeight/2-330);
  
  //pentlands icon
  pentlands.mouseOver(showPLBio);
  pentlands.mouseOut(hidePLBio);
  
  pentlands.show();
  pentlands.size(301,289);
  pentlands.position(270,160);
  
  pentlandsBio.size(398,505.5);
  pentlandsBio.position(windowWidth/2+250,windowHeight/2-330);
    
  //natorn icon
  natorn.mouseOver(showNTBio);
  natorn.mouseOut(hideNTBio);
    
  natorn.show();
  natorn.size(301,289);
  natorn.position(150,390);
  
  natornBio.size(398,550);
  natornBio.position(windowWidth/2+250,windowHeight/2-330);
  
  //penthouse icon
  penthouse.mouseOver(showPHBio);
  penthouse.mouseOut(hidePHBio);
  
  penthouse.show();
  penthouse.size(301,289);
  penthouse.position(700,40);
    
  penthouseBio.size(398,627.75);
  penthouseBio.position(windowWidth/2+250, windowHeight/2-330);
  
  pentgif.size(190,180);
  pentgif.position(windowWidth/2+450,windowHeight/2-280);
  
  //burrow bear icon
  burrowBear.mouseOver(showBBBio);
  burrowBear.mouseOut(hideBBBio);
  
  burrowBear.show();
  burrowBear.size(301,289);
  burrowBear.position(530,200);
  
  burrowBearBio.size(398,500);
  burrowBearBio.position(windowWidth/2+250, windowHeight/2-330);
  
  //big hue icon
  bigHue.mouseOver(showBHBio);
  bigHue.mouseOut(hideBHBio);
  
  bigHue.show();
  bigHue.size(301,289);
  bigHue.position(700,380);
    
  bigHueBio.size(398,570);
  bigHueBio.position(windowWidth/2+250, windowHeight/2-330);
  
  }
  if (counter == 2) {  
  flood.hide();
  cover.hide();
  inside.hide();
  cattailDevil1.hide();
  pentlands.hide();
  natorn.hide();
  penthouse.hide();
  burrowBear.hide();
  bigHue.hide();
  
  mural.show();
  mural.size(1817.5,834);
  
  //missing expl
  missing.mouseOver(missingReadShow);
  missing.mouseOut(missingReadHide);
  
  missing.show();
  missing.size(330,330);
  missing.position(0,0);
  
  missingCapt.size(200,80);
  missingCapt.position(mouseX+15,mouseY+15);
    
  //hilm intro
  hilm.mouseOver(hilmReadShow);
  hilm.mouseOut(hilmReadHide);
  
  hilm.show();
  hilm.size(115,150);
  hilm.position(25,355);
    
  hilmCapt.size(245,90);
  hilmCapt.position(mouseX+15,mouseY+15);
    
  //gossip expl
  gossip.mouseOver(gossipReadShow);
  gossip.mouseOut(gossipReadHide);
    
  gossip.show();
  gossip.size(500,300);
  gossip.position(360,10);
  
  gossipCapt.size(210,80);
  gossipCapt.position(mouseX+15,mouseY+15);
    
  // adventure into the pentlands
  adven.mouseOver(advenReadShow);
  adven.mouseOut(advenReadHide);
  
  adven.show();
  adven.size(400,400);
  adven.position(100,400);
  
  advenCapt.size(300,120);
  advenCapt.position(mouseX+15,mouseY+15);
  
  //fall into burrow
  fall.mouseOver(fallReadShow);
  fall.mouseOut(fallReadHide);
    
  fall.show();
  fall.size(500,400);
  fall.position(600,400);
  
  fallCapt.size(265,100);
  fallCapt.position(mouseX+15,mouseY+15);
  
  //the cattail devils are found!
  connect.mouseOver(connectReadShow);
  connect.mouseOut(connectReadHide);
  
  connect.show();
  connect.size(500,230);
  connect.position(1000,20);
    
  connectCapt.size(200,80);
  connectCapt.position(mouseX+15,mouseY+15);
  
  //finally home 
  after.mouseOver(afterReadShow);
  after.mouseOut(afterReadHide);
  
  after.show();
  after.size(200,200);
  after.position(1400,500);
    
  afterCapt.size(220,100);
  afterCapt.position(mouseX,mouseY);
  }
}
//functions for icons belowww
//cattail devil icon
function showCDBio() {
  cattailBio.show();
} 
function hideCDBio() {
  cattailBio.hide();
}

//pentlands icon
function showPLBio() {
  pentlandsBio.show();
}
function hidePLBio() {
  pentlandsBio.hide();
}
// naton icon
function showNTBio(){
  natornBio.show();
}
function hideNTBio(){
  natornBio.hide();
}
//penthouse icon
function showPHBio() {
  penthouseBio.show();
  pentgif.show();
}
function hidePHBio() {
  penthouseBio.hide();
  pentgif.hide();
}
//burrow bears icon
function showBBBio() {
  burrowBearBio.show();
}
function hideBBBio() {
  burrowBearBio.hide();
}
//big hue icon
function showBHBio() {
  bigHueBio.show();
}
function hideBHBio() {
  bigHueBio.hide();
}
//captions for mural
function missingReadShow() {
  missingCapt.show();
}
function missingReadHide() {
  missingCapt.hide();
}
function hilmReadShow() {
  hilmCapt.show();
}
function hilmReadHide() {
  hilmCapt.hide();
}
function gossipReadShow(){
  gossipCapt.show();
}
function gossipReadHide() {
  gossipCapt.hide();
}
function advenReadShow() {
  advenCapt.show();
}
function advenReadHide() {
  advenCapt.hide();
}
function fallReadShow() {
  fallCapt.show();
}
function fallReadHide() {
  fallCapt.hide();
}
function connectReadShow() {
  connectCapt.show();
}
function connectReadHide() {
  connectCapt.hide();
}
function afterReadShow() {
  afterCapt.show();
}
function afterReadHide() {
  afterCapt.hide();
}
//counter function
function mousePressed() {
  counter++;
  if (counter > 2) {
    counter = 0;
  }
  print('counter = ' + counter);
}