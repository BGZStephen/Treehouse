function getRandomNumber(upper) {
    var randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
}

// console.log(getRandomNumber(6));
// console.log(getRandomNumber(12));
// console.log(getRandomNumber(10));

// return outputds can be displayed in multiple ways
// alert(getRandomNumber);
// console.log(getRandomNumber);
// document.write(getRandomNumber);

// function to calculate the are of a square / rectangle
function getArea(x, y, unit) {
  var area = x * y;
  return area + " " + unit;
}
document.write(getArea(4, 4, "sq ft"));

// Create a Max() function
