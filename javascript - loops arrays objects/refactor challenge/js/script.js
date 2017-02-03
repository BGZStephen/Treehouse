var html = '';
var red;
var green;
var blue;
var rgbColor;

function randRGB() {
  return Math.floor(Math.random() * 256 );
}

function randColorValue() {
  var color = "rgb(";
  color += randRGB() + ", ";
  color += randRGB() + ", ";
  color += randRGB() + ")";
  return color;
}

for (var i = 1; i <= 10; i += 1) {
  rgbColor = randColorValue();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
