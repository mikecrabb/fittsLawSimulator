var aConstant = document.getElementById("a-constant");
var bConstant = document.getElementById("b-constant");
var wWidth = document.getElementById("w-width");
var dDistance = document.getElementById("d-distance");

var aValue = document.getElementById("aVal");
var bValue = document.getElementById("bVal");
var wValue = document.getElementById("wVal");
var dValue = document.getElementById("dVal");
var tValue = document.getElementById("tVal");
calculateFittsLaw();


aConstant.oninput = function() {
  calculateFittsLaw();
}

bConstant.oninput = function() {
  calculateFittsLaw();
}

wWidth.oninput = function() {
  calculateFittsLaw();
}

dDistance.oninput = function() {
  calculateFittsLaw();
}

function calculateFittsLaw(){
  var fittBox = document.getElementById("fittButton");
  fittBox.style.width = wWidth.value + "px";
  fittBox.style.height = wWidth.value + "px";
  totalDistance = parseInt(dDistance.value) + 80;
  fittBox.style.marginLeft = totalDistance + "px";

  result = parseInt(aConstant.value)+(parseInt(bConstant.value)*Math.log2(((parseInt(dDistance.value)))/parseInt(wWidth.value)));
  tValue.innerHTML = Math.round(result * 100)/100;

  aValue.innerHTML = aConstant.value;
  bValue.innerHTML = bConstant.value;
  wValue.innerHTML = wWidth.value;
  dValue.innerHTML = dDistance.value;

}
