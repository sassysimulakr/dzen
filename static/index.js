$(document).ready(
    function() {
        $('#text').click(function() {
            $.get("/", function(data) {
                  $("body").html(data)
            })
        })
    }
)
