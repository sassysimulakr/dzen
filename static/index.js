$(document).ready(
    function() {
        $('#text').click(function() {
            $.get("", function(data) {
                setTimeout(function() {
                    $("#text").html(data)
                }, 2000);
            })
        })
    }
)
