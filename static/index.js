$(document).ready(
    function() {
        $('#text').click(function() {
            $('#preImg').remove(function() {
                $.get("", function(data) {
                    setTimeout(function() {
                        $("#text").html(data)
                    }, 2000);
                })
            })
        })
    }
)
