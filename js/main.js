$("a.reset").click(function (e) {
    e.preventDefault();

    $("div.top").removeClass("dot1");
    $("div.mid").removeClass("dot2");
    $("div.btm").removeClass("dot3");
    $("li.title-animate").removeClass("title-animate");

    setTimeout(function () {
        $("div.top").addClass("dot1");
        $("div.mid").addClass("dot2");
        $("div.btm").addClass("dot3");
        $("ul.titles li").addClass("title-animate");
    }, 500);
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}