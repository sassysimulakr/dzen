$(document).ready(
    function() {
        $('#text').click(function() {
            $.get("/toSend", function(data) {
                  $(".quote-text").replaceWith(data);
            })
        })
    }
)
