function showSearch(e) {
    var searchbox = document.getElementById("searchbox");
    if (searchbox.style.display == "block") {
        searchbox.style.display = "none";
    } else {
        searchbox.style.display = "block";
    }
}

function showDropbox(e) {
    var dropbox = document.getElementById("riodrop");
    dropbox.style.display = "block";
}

function hideDropbox(e) {
    var dropbox = document.getElementById("riodrop");
    dropbox.style.display = "none";
}

function showLogin() {
    var login_container = document.getElementsByClassName("login-container")[0];
    login_container.style.visibility = "visible";
}

function hideLogin() {
    var login_container = document.getElementsByClassName("login-container")[0];
    login_container.style.visibility = "hidden";
}