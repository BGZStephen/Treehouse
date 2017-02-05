// problem: hints are shown even when form is valid
// solution: hide and show hints at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

// 1. hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
  if (isPasswordValid()) { // check password length is greater than 8
    $password.next().hide(); // select the next element (hint) and show
  } else {
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  if (arePasswordsMatching()) {
    $confirmPassword.next().hide(); // select the next element (hint) and show for confirm_password
  } else {
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit())
}

// 2. when event happens on password input
// find if password is valid
  // hide if valid
  // else, show hint
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent); // execute passwordEvent function on focus and keyup
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent); // execute confirmPasswordEvent on focus or keyup of the confirm_password input

canSubmit();
// 3. when event happens on confirmation
  // find out if password and confirmation match
  // hide hint if matched
  // else show hint
