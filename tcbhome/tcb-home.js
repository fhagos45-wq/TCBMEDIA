// Function to handle logout from any page
async function handleTCBLogout() {
    try {
        const { error } = await _supabase.auth.signOut();
        
        if (error) throw error;

        // Clear session data
        localStorage.clear();
        sessionStorage.clear();

        // Redirect to the main login/index page
        window.location.href = "index.html"; 
    } catch (err) {
        console.error("Logout failed:", err.message);
        alert("Logout failed. Please try again.");
    }
}

// Attach listener and display user email on load
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Show user email if logged in
    const { data: { user } } = await _supabase.auth.getUser();
    if (user) {
        const emailEl = document.getElementById('user-email-display');
        if (emailEl) emailEl.innerText = user.email.split('@')[0]; // Shows name before @
    }

    // 2. Button Click Event
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleTCBLogout);
    }
});
