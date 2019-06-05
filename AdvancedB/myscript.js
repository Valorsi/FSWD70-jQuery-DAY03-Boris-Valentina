$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('#moveme').css({
            left: e.pageX - $("#moveme").width() / 2,
            top: e.pageY - $("#moveme").height() / 2,
        });
        // $("#moveme").click(function() {
        //     $("#moveme").attr("id", "newId");
        // });
    });

    $("#plane").click(function() {
        $("#plane").animate({
            top: '500px'
        }, 'slow', 'linear')
        $("#plane").fadeOut(2000);
        $("#plane").fadeIn(2000);
    });
});