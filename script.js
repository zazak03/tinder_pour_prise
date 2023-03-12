let Button_cross = document.getElementById('cross-button');
let Button_heart = document.getElementById('heart-button');
let myHeading = document.getElementById("head");

let global_counter = 1;

function start_anim(direction) {
  //on fait le swipe
  console.log(direction);
  let elem = document.getElementById("ele" + global_counter);
  if (direction == "left") {
    console.log("anim_left");
    elem.classList.add("swip-animation-left");
  }
  else {  
    console.log("anim_right");
    elem.classList.add("swip-animation-right");
  }
  //on repositionne les autres elements
  for (let i = 1; i <= 3; i++) {
    temp = global_counter + i
    console.log("t" + temp);
    let elem2 = document.getElementById("ele" + temp)
    elem2.classList.add("element-" + i);
      elem2.classList.remove("element-" + (i + 1));
  }
  //on ajoute un nouveau element
  let div = document.createElement("div")
  div.setAttribute("id", "ele" + (global_counter + 4));
  div.classList.add("element");
  div.classList.add("element-4");
  myHeading.append(div);
  global_counter++;
}

Button_cross.addEventListener('click', function () {
  console.log("anim_left");
  start_anim("left");
});
Button_heart.addEventListener('click', function () {
  console.log("anim_right");
  start_anim("right");
});