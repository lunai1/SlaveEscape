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
  text.innerHTML = "You wake up in your quarters, the smell of bodys permeating the air.";
  button.innerHTML = "<button class='choice_button' onclick='c3()'>...</button>";
  invent();
}
function c2() {
  text.innerHTML = ">";
  button.innerHTML = "";
  invent();
}
function c3() {
  text.innerHTML = "";
  button.innerHTML = "";
  invent();
}
function c4() {
  text.innerHTML = "";
  button.innerHTML = "";
  invent();
}
function c5() {
  text.innerHTML = "";
  button.innerHTML = "";
  invent();
}
function c6() {
  text.innerHTML = "";
  button.innerHTML = "";
 invent();
}
function c7() {
  moniter = true;
  text.innerHTML = ""
  button.innerHTML = ""
  invent();
}
function c13() {
  text.innerHTML = "";
  button.innerHTML = "";
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
  text.innerHTML = "";
  button.innerHTML = "<button class='choice_button' onclick='c13()'>...</button>"
  invent();
}
function c9() {
  text.innerHTML = "";
  button.innerHTML = "";
  invent();
}
function c10() {
  text.innerHTML = "";
  button.innerHTML = "";
  invent();
}
function c11() {
  text.innerHTML = "";
  button.innerHTML = "";
   invent();
}
function c12() {
  text.innerHTML = "";
  button.innerHTML = "";
  invent();
}
function c14() {
   text.innerHTML = "";
   button.innerHTML = "";
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
