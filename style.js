$(document).ready(function () {
    $(window).scroll(function () {
    var sbar = $(window).scrollTop();
    var position = sbar * 0.7;
    
    $(".parallax").css({
     "background-position": "0 -" + position + "px"
    });
    });
    });
    var myIndex = 0;
    carousel();
    
    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 1000); // Change image every 1 second
    }