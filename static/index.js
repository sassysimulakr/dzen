$(document).ready(
  function() {
    $('#text').click(function() {
        $.get("", function(data) {
            $("#text").html(data);
        })
    })
  }
)
