const supabaseUrl = 'https://qruvqejwguwivvpomtki.supabase.co';
const supabaseKey = 'YOUR_ANON_PUBLIC_KEY';

// Create Supabase client
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Elements (only if they exist on the page)
const logoutBtn = document.getElementById("logoutBtn");
const loginBtn = document.getElementById("loginBtn");
const statusText = document.getElementById("status");

// 🔐 Check user session
async function checkAuth() {
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;

    if (user) {
        console.log("User logged in:", user.email);

        if (logoutBtn) logoutBtn.style.display = "inline-block";
        if (loginBtn) loginBtn.style.display = "none";
        if (statusText) statusText.innerText = "Logged in ✔";
    } else {
        console.log("No user logged in");

        if (logoutBtn) logoutBtn.style.display = "none";
        if (loginBtn) loginBtn.style.display = "inline-block";
        if (statusText) statusText.innerText = "Not logged in ❌";
    }
}

// 🚪 Logout function
async function logoutUser() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        alert("Logout failed: " + error.message);
        return;
    }

    // refresh UI after logout
    checkAuth();

    // optional redirect
    window.location.href = "login.html";
}

// 🎯 Attach button event
document.addEventListener("DOMContentLoaded", () => {
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logoutUser);
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }

    checkAuth();
});
