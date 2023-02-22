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
    } else if (!regn.test(n)) {
        alert("enter valid name");
    } else if (m == null || m == "") {
        alert("Email field is empty");
    } else if (!rege.test(m)) {
        alert("enter valid email");
    } else if (msg == null || msg == "") {
        alert("message field is empty");
    }
}
