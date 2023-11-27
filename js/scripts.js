$("#face-exp").css("background-image", "url('imgs/delighted.svg')");
$("#face-exp").css("background-size", "contain");
$("#face-exp").css("background-repeat", "no-repeat");

/*
    Mouse Click Counter
    SRC: https://stackoverflow.com/questions/24543628/how-to-count-mouse-clicks
*/
var number = 1;
var mouseClicked = function() {
  console.log('mouseClick = ' + number);
  number++;
}

$("#face-exp").on("click", function() {
    if(number == 1) {
        console.log("not enough clicks");
    } else if(number == 6) {
        $("#face-exp").css("background-image", "url('imgs/denial.svg')");
        $("#face-exp").css("background-size", "contain");
        $("#face-exp").css("background-repeat", "no-repeat");
        $("body").css("background", "#FFCB9E");
    } else if(number == 12) {
        $("#face-exp").css("background-image", "url('imgs/anger.svg')");
        $("#face-exp").css("background-size", "contain");
        $("#face-exp").css("background-repeat", "no-repeat");
        $("body").css("background", "#FF5349");
    } else if(number == 18) {
        $("#face-exp").css("background-image", "url('imgs/bargain.svg')");
        $("#face-exp").css("background-size", "contain");
        $("#face-exp").css("background-repeat", "no-repeat");
        $("body").css("background", "#EAFF9E");
    } else if(number == 20) {
        $("#face-exp").css("background-image", "url('imgs/depress.svg')");
        $("#face-exp").css("background-size", "contain");
        $("#face-exp").css("background-repeat", "no-repeat");
        $("body").css("background", "#344675");
    } else if(number == 24) {
        $("#face-exp").css("background-image", "url('imgs/acceptance.svg')");
        $("#face-exp").css("background-size", "contain");
        $("#face-exp").css("background-repeat", "no-repeat");
        $("body").css("background", "#3A3F66");
    } else if($("#click-reset").on("click", function() {
        /* CoPilot Assistance */
        $("#face-exp").css("background-image", "url('imgs/delighted.svg')");
        $("#face-exp").css("background-size", "contain");
        $("#face-exp").css("background-repeat", "no-repeat");
        $("body").css("background", "azure");
        number = 1;
        console.log('mouseClick = ' + number);
    }));
});
