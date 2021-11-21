let slider = document.getElementById("myRange");
let img = document.getElementById("img");

// Update the current slider value 
slider.oninput = function () {
  
  if (this.value < 40) {
    img.src = "images/light1.png";
  }
  else if (this.value < 70) {
    img.src = "images/light2.png";
  }
  else if (this.value < 100) {
    img.src = "images/light3.png";
  } 
};

