// 1. Connection settings (Replace the text in quotes with your actual keys from Supabase)
const supabaseUrl = 'YOUR_SUPABASE_URL'; 
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.querySelector("form");

form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Stop the page from refreshing

    // Capture the data from your tcb.html inputs
    const fullname = document.querySelector('input[name="fullname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // 2. Original Password Check
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return; // Stop the code here if password is too short
    }

    // 3. Send the data to your Supabase "profiles" table
    const { data, error } = await _supabase
        .from('profiles')
        .insert([
            { 
                full_name: fullname, 
                email: email 
            }
        ]);

    if (error) {
        // If there is a problem, show the error
        alert("Error: " + error.message);
    } else {
        // If it works, show success and clear the form
        alert("Success! " + fullname + " is now registered.");
        form.reset(); 
    }
});
