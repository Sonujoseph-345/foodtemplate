// Author : Sonu J
function validate() {
    let n = document.getElementById("name").value;
    let m = document.getElementById("mail").value;
    let msg = document.getElementsByTagName("textarea").value;

    let regn = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    let rege =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (n == null || n == "") {
        alert("Name field is empty");
        return false;
    } else if (!regn.test(n)) {
        alert("enter valid name");
        return false;
    } else if (m == null || m == "") {
        alert("Email field is empty");
        return false;
    } else if (!rege.test(m)) {
        alert("enter valid email");
        return false;
    } else if (msg == null || msg == "") {
        alert("message field is empty");
        return false;
    }
}
var myDiv = document.getElementById("nav1");

// Listen for scroll event on the window object
window.addEventListener("scroll", function () {
    // Get the current scroll position of the window
    var scrollTop = window.pageYOffset;

    // If the scroll position is greater than 50px, change color of div to red
    if (scrollTop > 50) {
        myDiv.style.backgroundColor = "rgba(0,0,0,.5)";
    } else {
        myDiv.style.backgroundColor = "";
    }
});