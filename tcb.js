function openLogout(){
    document.getElementById("logoutModal").style.display = "flex";
}

function closeLogout(){
    document.getElementById("logoutModal").style.display = "none";
}

function logout(){
    alert("You have logged out successfully!");
    window.location.href = "login.html";
}