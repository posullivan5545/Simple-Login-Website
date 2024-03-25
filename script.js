/*
Author: Paul O'Sullivan
Date: 3/12/24
Purpose: Login authentication to view webpage contents held on index.html
 */

function auth() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    // Check
    if (user === "user" && pass === "pass") {
        // Show content, remove login box if credentials match
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("page").style.display = "block";
    } else {
        // Reject wrong credentials
        alert("Invalid username or password. Please try again.");
    }
} // end auth
