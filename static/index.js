$(document).ready(
    function() {
        $('html').click(function() {
            $.get("/toSend", function(data) {
                  $(".quote-text").replaceWith(data);
            })
        })
    }
)


var socket = io();
console.log(socket);
