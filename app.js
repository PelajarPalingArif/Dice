
let inversemode = false;
let posColor = "green";
let negColor = "red";
let firstClick = true;

let changePoint = 50;

let movingSlider = document.querySelector(".moving-slider");
let winChanceInput = document.querySelector("#winChanceInput");
let multiplierInput = document.querySelector("#multiplierInput");
let inverseButton = document.querySelector("#inverse-button");
let rangeInput = document.querySelector("#rangeInput");
let edge = 0.05;

inverseButton.addEventListener("click", function() {
  const tempColor = posColor;
  posColor = negColor;
  negColor = tempColor;
  inversemode = !inversemode;  
  var valueDisplay = (rangeInput.value-rangeInput.min)/(rangeInput.max-rangeInput.min)*100 ;
  rangeInput.style.background = `linear-gradient(to right, ${posColor} 0%, ${posColor} ${valueDisplay}%, ${negColor} ${valueDisplay}%, ${negColor} 100%)`;

})
rangeInput.oninput = function() {
    var valueDisplay = (this.value-this.min)/(this.max-this.min)*100 ;
    this.style.background = `linear-gradient(to right, ${posColor} 0%, ${posColor} ${valueDisplay}%, ${negColor} ${valueDisplay}%, ${negColor} 100%)`;

    console.log(this.value);
    changePoint = this.value;
    generateWinChance(this.value);
    generateMultiplier(this.value);
};


function generateWinChance(value){
  winChanceInput.value = value;
}

function generateMultiplier(value){
  multiplierInput.value = (1 / (value / 100) - edge).toFixed(2);
}


document.querySelector("#play-button").onclick = function() {
  const min = 0; 
  const max = 96;

  const randomNumber = parseFloat((Math.random() * 100).toFixed(2));
  const sliderPosition = parseFloat((randomNumber / 100 * max).toFixed(2));
  
  movingSlider.style.left = `calc( ${sliderPosition}% - 8px)`;
  movingSlider.textContent = randomNumber.toFixed(2);
  if(firstClick){
    movingSlider.style.opacity = "1";
    firstClick = false;
  }
  if(randomNumber > changePoint) {
    movingSlider.style.color = `${negColor}`;
    if(inversemode)console.log("Win");
  }
  else {
    movingSlider.style.color = `${posColor}`;
    if(!inversemode)console.log("Win");
  }
  console.log(`calc( ${sliderPosition}%+ 10px - 18px)`);
    


}