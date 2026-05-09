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

// 1. Connection settings
const _supabase = supabase.createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

const form = document.querySelector("form");

form.addEventListener("submit", async function(e) {
    e.preventDefault(); // This stops the page from refreshing

    // Get values from your tcb.html inputs
    const fullname = document.querySelector('input[name="fullname"]').value;
    const email = document.querySelector('input[name="email"]').value;

    // 2. Send the data to your "profiles" table in Supabase
    const { data, error } = await _supabase
        .from('profiles')
        .insert([{ full_name: fullname, email: email }]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Success! " + fullname + " is now in your database.");
        form.reset(); // Clears the form for the next user
    }
});
