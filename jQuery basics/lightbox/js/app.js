// users currently can click on images, this causes them to go to a dead end.
// solution: create an overlay with the large image (Lightbox)
var $overlay = $("<div id='overlay'></div>"); // create a div to append to the document for the opaque background
var $image = $("<img>"); // image variable to append to the overlay
var $caption = $("<p></p>")

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);
// remove default behaviour for clicking on links to images
$("#image-gallery a").click(function() {
  event.preventDefault();  // prevent default action of the link click
  var imageLocation = $(this).attr("href"); // get the href from the image we just clicked on
  $image.attr("src", imageLocation); // assign src of image to be overlayed from the href of the image we clicked on
  var imageCaption = $(this).children("img").attr("alt"); // get the alt attribute of the image which is the child of the link we clicked on
  $caption.text(imageCaption); // insert text in to the caption we appended to the overlay
  $overlay.show(); // show overlay
})


// 4. when overlay is clicked, remove lightbox
$overlay.click(function() {
  $overlay.hide();
})
