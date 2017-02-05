// hide spoilers
// reveal them through user interaction

// 1 hide the contents of the spoiler
$(".spoiler span").hide()
// 2 add a button
$(".spoiler").append("<button>Reveal Spoiler</button>")
// 3 when button pressed
  $("button").click(function() {
    $(this).prev().show(); // select the previous element (as we added the button after the span) and show just it, as opposed to all spans
    $(this).remove();
  });
  // 3.1 show the spoiler
  // get rid of the button
