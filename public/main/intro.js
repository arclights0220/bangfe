function openLNav() {
    document.getElementById("LeftSidenav").style.width = "500px";
    isOpen = 0;
}

function closeLNav() {
    document.getElementById("LeftSidenav").style.width = "0";
    isOpen = 1;
}
var isOpen = 1;

var lnav = document.getElementById("Lnbtn");
document.addEventListener("keydown", (event) => {
    var x = event.which;
    if (x == 9) {
        if (isOpen == 1) {
            openLNav();
        }
        else if (isOpen == 0) {
            closeLNav();
        }
        event.preventDefault();
    }
})

