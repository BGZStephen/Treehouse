// app does not look great in smaller browser widths
// solution - hide the text links at smaller widths, swap them out with a more appropriate navigation

// create a select box and append to menu
var $select = $("<select></select>")
$("#menu").append($select);

// cycle over each li and create options within the select box
$("#menu a").each(function() {
  var $anchor = $(this);
  var $option = $("<option></option>");
  if ($anchor.parent().hasClass("selected")) { // check if the anchors parent li has the class selected, if so, set the option property to selected.
      $option.prop("selected", true);
  }
  $option.val($anchor.attr("href")); // set the option value to that of the anchors href attribute
  $option.text($anchor.text()); // set the option text as the anchor text
  $select.append($option);
})

// each time the select option changes, update the window location
$select.change(function() {
  window.location = $select.val();
})
