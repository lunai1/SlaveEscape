var text = document.getElementById('story-container');
var button = document.getElementById('button-container');
var inventory = document.getElementById('inventory_container');
function invent() {
}
function gameOver() {
  pre();
}
function pre() {
    text.innerHTML = 'WELCOME TO SLAVE ESCAPE.<br>This is a choice led game, so choose wisely.';
    button.innerHTML = "<button id='name_submit' onclick='start()'>START</button>";
}
function start() {
    text.innerHTML = "<h1>Your name is Neisha. You are a black slave. Your job is to escape. Good Luck.";
    button.innerHTML = "<button id='choice_button' onclick='c1'>...</button>";
    invent();
}
function c1() {
  text.innerHTML = "You wake up in your quarters, the smell of bodys.";
  button.innerHTML = "<button class='choice_button' onclick='c3()'>...</button>";
  invent();
}
function c2() {
  text.innerHTML = "<h1>You break out of the line,</h1><h3> sprinting behind the line of people. There are<h3 class='highlight'> 3</h3> doors in front of you, but you have to choose quickly.</h3><h2> The guards are shooting!</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c4()'>DOOR 1</button><button class='choice_button' onclick='c5()'>DOOR 2</button><button class='choice_button' onclick='c6()'>DOOR 3</button> ";
  invent();
}
function c3() {
  text.innerHTML = "<h1>He then gives you a watch,</h1><h3> with a holographic display and a dial on the side. He looks at you expectantly</h3><h2>Do you put on the watch?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c7()'>YES</button><button class='choice_button' onclick='c8()'>NO</button>";
  invent();
}
function c4() {
  text.innerHTML = "<h1>You run to the first door,</h1><h3> gun fire resounding after you. You wretch open the door, and slam it behind you. You hear a beeping behind you, and a lock slide into place. There is no going back. You can hear running echoing though the hallways.</h3><h2> Do you either run swiftly, or jog slowly and look for a hiding place?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c9()'>RUN FAST</button><button class='choice_button' onclick='c10()'>LOOK FOR HIDING PLACE</button>";
  invent();
}
function c5() {
  text.innerHTML = "<h2>You make it to the second door,</h2><h3> wretching it open and closing it behind you. You here bullets clank of the door, then go silent. You then hear running echoing though the hallways.</h3><h2> Do you either run swiftly, or jog slowly and look for a hiding place?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c11()'>RUN FAST</button><button class='choice_button' onclick='c12()'>LOOK FOR HIDING PLACE</button>";
  invent();
}
function c6() {
  text.innerHTML = "<h2>You make it to the third door, wretching it open and slamming it behind you. You look around, and realize that your trapped in a glorified closet. You hear the guards open the door, and you rush them in desperation, but they shoot you down.</h2>";
  button.innerHTML = "<button class='gameover_button' onclick='gameOver();'>PLAY AGAIN</button>";
 invent();
}
function c7() {
  moniter = true;
  text.innerHTML = "<h2>You shrug, then put on the watch.</h2><h3> As you're inspecting the watch, a searing pain radiates from your wrist. As you look in horror, glowing lines trace themselves into your veins.</h3><h2>You are now hooked up to the Moniter.</h2>"
  button.innerHTML = "<button class='choice_button' onclick='c13()'>...</button>"
  invent();
}
function c13() {
  text.innerHTML = "<h2>The guard then pulls you over to a table,</h2><h3> which has two buttons. Above the buttons are holograms of a Compound Bow, and that of a Machete.</h3><h2> Choose your weapon.</h2>";
  button.innerHTML = "<button class='choice_button' onclick='bowPick()'>COMPOUND BOW</button><button class='choice_button' onclick='swordPick()'>MACHETTE</button>";
  invent();
}
function bowPick() {
    weapon_type = "bow";
    weapon = "Starter Compound Bow";
    armor = "Basic Armor";
    weapon_bool = true;
    armor_bool = true;
    text.innerHTML = "<h2>You press the button,</h2><h3> and after a moment, a compartment opens up and a silvery compound bow is drawn out by the guards. He then gives you some armor and your new weapon.</h3>";
    button.innerHTML = "<button class='choice_button' onclick='c14()'>...</button>";
    invent();
    console.log(weapon, armor);
}
function swordPick() {
  weapon_type = "sword";
  weapon_bool = true;
  armor_bool = true;
  weapon = "Starter Machette";
  armor = "Basic Armor";
  text.innerHTML = "<h2>You press the button,</h2><h3> and after a moment, a compartment opens up and a sharp machette is drawn out by the guards. He then gives you some armor and your new weapon.</h3>";
  button.innerHTML = "<button class='choice_button' onclick='c14()'>...</button>";
  console.log(weapon, armor);
  invent();
}
function c8() {
  moniter = true;
  text.innerHTML = "<h2>You shake your head at the guard, but then he grabs you by the neck, forcing you onto the table and putting on the watch, then letting you go. You look at the guard irritably, but then suddenly collapse in pain as glowing lines of light trace themselves in your veins. You are now hooked up to the moniter.</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c13()'>...</button>"
  invent();
}
function c9() {
  text.innerHTML = "<h2>You sprint down the halls, but then you notice that there are hallways branching of to the side. Do you keep going down the hallway, take the left exit, or take the right exit?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c15()'>LEFT EXIT</button><button class='choice_button' onclick='c16()'>KEEP GOING</button><button class='choice_button' onclick='c17()'>RIGHT EXIT</button>";
  invent();
}
function c10() {
  text.innerHTML = "<h2>You decide that it would be better to wait it out in a nice hiding spot,</h2> so you walk down the hallway looking for anything that could serve. As you're jogging, you come across a space where you can climb up into a hollow between some pipes. You climb up and wait for the guards to come. A few minutes later, you hear marching, and 2 guards come into sight. Do you jump down and try to fight them, or wait for them to pass?";
  button.innerHTML = "<button class='choice_button' onclick='c18()'>FIGHT</button><button class='choice_button' onclick='c19()'>WAIT</button>";
  invent();
}
function c11() {
  text.innerHTML = "<h2>You sprint down the halls, but you can hear the guards coming.</h2><h3>Suddenly, you see a hallway branching out to the left.</h3><h2>Do you keep going or do you take the exit.</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c19()'>KEEP GOING</button><button class='choice_button' onclick='c20()'>TAKE THE EXIT</button>";
   invent();
}
function c12() {
  text.innerHTML = "<h2>You look for a good hiding spot as you jog down the corridor. You speed up as you hear the guards approaching. No matter how hard you look, you can't seem to find a hiding spot. Suddenly you feel a bullet rip through your shoulder, and you stumble to the ground. you roll over to find a masked guard point a gun at your head. Game Over</h2>";
  button.innerHTML = "<button class='gameover_button' onclick='gameOver()'>PLAY AGAIN</button>";
  invent();
}
function c14() {
   text.innerHTML = "<h2>The guards pull you over to a big cafeteria,</h2><h3>where people mill around talking with each other. Towards the back of the cafeteria you can see a door to a training room</h3>";
   button.innerHTML = "<button class='choice_button' onclick='social1()'>SOCIALIZE</button><button class='choice_button' onclick='train1()'>TRAIN</button>";
   invent();
}
function social1() {
   random_points = Math.floor( Math.random() * 3 );
   text.innerHTML = "<h2>You head towards the milling crowds of people, introducing yourself and asking around. You have gained "+random_points+" points for socializing</h2>";
   button.innerHTML = "<button class='choice_button' onclick='cafeteria()'>Go Back to Cafeteria</button>";
   socialPt += random_points;
   invent()
}
function train1() {
   random_points = Math.floor( Math.random() * 3);
   text.innerHTML = "<h2>You walk towards the training room and begin your training with the " + weapon + ".<br> You have gained <b>" + random_points + " points in training.</b>.</h2>";
   button.innerHTML = "<button class='choice_button' onclick='cafeteria()'>Go Back to Cafeteria</button>";
   trainPt += random_points;
   invent();
}
function cafeteria() {
   if(trainPt + socialPt >= 12) {
      if(socialPt >= 7 || trainPt < 6) {
         text.innerHTML = "<h2>A man walks over to the table you usually sit at. He sits down.\" It's " + name + " right? Yeah. So I have a proposal. There is something that we have kept a secret, which is that we know a secret of the Higher Ups. The secret is that they have been experimenting with a new kind of weapon. this weapon is called Psy. We plan to use Psy to escape, but we don't know how. How about this. You go through a secret door that we have kept hidden from the guards and get this ability, and then you lead us to freedom. How about it?\"</h2>";
         button.innerHTML = "<button class='choice_button' onclick='c21()'>SURE</button><button class='choice_button' onclick='c22()'>NO THANKS</button>";
      }else if(trainPt >= 7 || socialPt < 6) {
         text.innerHTMl = "<h2>A man walks over to the table you usually sit at. He sits down.\" It's " + name + " right? Yeah. So I have a proposal. We want to make a team of people who we have noticed excel with their weapon training. This team will be our bodyguards and the people who will disable the moniters. Whaddya say?\"</h2>";
         button.innerHTML = "<button class='choice_button' onclick='c23()'>SURE</button><button class='choice_button' onclick='c22()'>NO THANKS</button>";

      }
   }else {
      text.innerHTML = "<h2>You go to an empty table and sit around waiting for something to happen.</h2>";
      button.innerHTML = "<button class='choice_button' onclick='social()'>SOCIALIZE</button><button class='choice_button' onclick='train()'>TRAIN</button>";
   }
}
function train() {
   random_points = Math.floor( Math.random() * 4);
   if(weapon_type == "sword") {
      text.innerHTML = "<h2>You head back over to the training room and start hacking at the dummy with your sword, looking for various weak-spots that the training instructer taught you to look for. You have gained " + random_points +" points in training.</h2>";
   }else if(weapon_type == "bow") {
      text.innerHTML = "<h2>You head over to the training room and start shooting at the dummy, aiming for the joints of the arms and legs, and shooting at the neck. You have gained " + random_points + " point in training.</h2>";
   }
   button.innerHTML = "<button class='choice_button' onclick='cafeteria()'>Go Back to Cafeteria</button>";
   trainPt += random_points;
   invent();
}
function social() {
   random_points = Math.floor( Math.random() * 4);
   text.innerHTML = "<h2>You head over to the milling crowds and start digging for information and making new connections. You have gained " + random_points + " points in socializing.</h2>";
   button.innerHTML = "<button class='choice_button' onclick='cafeteria()'>Go Back to Cafeteria</button>";
   socialPt += random_points;
   invent();
}
function c15() {}
function c16() {}
function c17() {}
function c18() {}
function c19() {}
function c20() {}
function c21() {}
function c22() {}
