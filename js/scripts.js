var numInput = function(number) {
  if (isNaN(numInput)) {
    alert("That is not a number.");
  } else if (numInput < 0) {
    alert("Number must not be negative.");
  }
}

function loopThroughInput (numInput) {
  var result = [];
  var beep = "Beep";
  var boop = "Boop";
  var neighbor = "Won't you be my neighbor?";
  for (var i = 0; i <= numInput; i++) {
    var numString = numInput.toString();
    if (i % 3 === 0 && i > 0) {
      result.push(neighbor);
    } else if (numString.includes("1")) {
      result.push(boop);
    } else if (numString.includes("0")) {
      result.push(beep);
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var numInput = parseInt($("#numInput").val());
    $("#num-result").append("<p>[" + loopThroughInput(numInput) + "]<p>");
  });
});