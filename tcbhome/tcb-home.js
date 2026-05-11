// Supabase Logout
async function logoutUser() {

    const { error } = await _supabase.auth.signOut();

    if (error) {
        alert("Logout failed!");
    } else {
        alert("Logged out successfully!");
        window.location.href = "index.html";
    }
}
