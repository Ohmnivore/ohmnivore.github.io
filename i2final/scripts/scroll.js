$(document).ready(startMove);

function startMove() {
    var y = 0;
    setInterval(function() {
        y -= 1;
        if (y <= -100000)
            y = 0;
        $('body').css('background-position', '0 ' + y + 'px');
    }, 100);
}
