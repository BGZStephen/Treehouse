var html = '';
var red;
var green;
var blue;
var rgbColor;

function randColorValue() {
  return Math.floor(Math.random() * 256 );
}

for (var i = 1; i <= 10; i += 1) {
  red = randColorValue();
  green = randColorValue();
  blue = randColorValue();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
