let movingSlider = document.querySelector(".moving-slider");
document.querySelector("#rangeInput").oninput = function() {
    var valueDisplay = (this.value-this.min)/(this.max-this.min)*100 + 1;
    this.style.background = 'linear-gradient(to right, green 0%, green ' + valueDisplay + '%, red ' + valueDisplay + '%, red 100%)'
    
};


document.querySelector("#play-button").onclick = function() {
  const min = 0; 
  const max = 95.5;

  const randomNumber = parseFloat((Math.random() * 100).toFixed(2));
  const sliderPosition = parseFloat((randomNumber / 100 * 95.5).toFixed(2));
  movingSlider.style.left = `calc( ${sliderPosition}% - 8px)`;
  movingSlider.textContent = randomNumber;
  console.log(`calc( ${sliderPosition}%+ 10px - 18px)`);



}