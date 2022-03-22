let button, img;
function preload(){
  home = loadImage('assets/homepage.png');
  account = loadImage('assets/account.png');
  activity = loadImage('assets/activity.png');
  messages = loadImage('assets/messages.png');
  search = loadImage('assets/searchpage.png');
  post = loadImage('assets/post.png');


  //buttons
  postb = loadImage('assets/postbutton.png');
  accountb = loadImage('assets/accountbutton.png');
  activityb = loadImage('assets/activitybutton.png');
  messagesb = loadImage('assets/messagesbutton.png');
  searchb = loadImage('assets/searchbutton.png');
  postb = loadImage('assets/postbutton.png');
  profile = loadImage('assets/profile.png');


}

function setup() {
  // put setup code here
  createCanvas(1000,1200);
  image(home,0,0);
  button = createImg('assets/activitybutton.png', 'activity button');
  button.position(300,750);
  button.mousePressed(loadActivity);

  button1 = createImg('assets/searchbutton.png', 'search button');
  button1.position(130,750);
  button1.mousePressed(loadSearchy);

  button2 = createImg('assets/postbutton.png', 'post button');
  button2.position(210,750);
  button2.mousePressed(loadPost);

  button3 = createImg('assets/homebutton.png', 'home button');
  button3.position(50,750);
  button3.mousePressed(loadHome);

  button4 = createImg('assets/messagesbutton.png', 'messages button');
  button4.position(320,60);
  button4.mousePressed(loadMessages);

  button5 = createImg('assets/accountbutton.png', 'account button');
  button5.position(40,60);
  button5.mousePressed(loadAccount);

}
function loadActivity(){
  
  image(activity,0,0);
}
function loadAccount(){
  image(account,0,0);
}
function loadHome(){
  image(home,0,0);
}
function loadSearchy(){
  image(search,0,0);
  button6 = createImg('assets/profile.png', 'proofile button');
  button6.position(40,140);
  button6.mousePressed(function(){ (loadAccount) ( button6.remove() )});

}
function remove5(){
  button5.remove();
}
function loadMessages(){
  image(messages,0,0);
}
function loadPost(){
  image(post,0,0);
}
// function draw() {
//   // put drawing code here
// }