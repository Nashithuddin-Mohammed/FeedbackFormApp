$(document).ready(function () {
    $('#feedbackTable').dataTable();
    var loggedIn = localStorage.getItem("loggedIn")
    if (loggedIn) {
        document.getElementById('loginDiv').style.display = 'none';
        document.getElementById('logoutDiv').style.display = 'block';
        document.getElementById('feedbackDiv').style.display = 'block';
    } else {
        document.getElementById('loginDiv').style.display = 'block';
        document.getElementById('logoutDiv').style.display = 'none';
        document.getElementById('feedbackDiv').style.display = 'none';
    }
    $('#logoutLink').on('click', (event) => {
        localStorage.removeItem('loggedIn');
    })
});