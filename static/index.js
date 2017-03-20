$(document).ready(
    function() {
        $('html').click(function() {
            $.get("/toSend", function(data) {
                  $(".quote-text").replaceWith(data);
            })
        })
    }
)
