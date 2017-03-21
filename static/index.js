$(document).ready(
    function() {
        $('html').click(function() {
            socket.emit('clickCaptured');
            $.get("/toSend", function(data) {
                  $(".quote-text").replaceWith(data);
            })
        })

        socket.on('clickCapturedOnce', function () {
          $.get("/toSend", function(data) {
                $(".quote-text").replaceWith(data);
          })
        });
    }
)
var socket = io();
