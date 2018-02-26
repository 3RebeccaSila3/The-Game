$(document).ready(function() {
  $("#pingpong").submit(function(event) {
    var num = parseInt($("#number").val());

    if (!isNaN(num)) {
      var i;
      for (i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          $("#display_number").append("<ul><li>PingPong</li></ul>");
        } else if (i % 3 === 0) {
          $("#display_number").append("<ul><li>Ping</li></ul>");
        } else if (i % 5 === 0) {
          $("#display_number").append("<ul><li>Pong</li></ul>");
        } else {
          $("#display_number").append("<ul><li>" + i + "</li></ul>");
        }
      }
    }
    return false;
  });

  // empty the output
  $('input').on('focus', function() {
    $("#display_number ul").fadeOut(400, function() {
      $("#display_number").empty();
    });
  });

})