// 1. Connection settings
// Go to Supabase Dashboard > Settings > API to find these.
// Make sure the URL starts with https://
const supabaseUrl = 'YOUR_ACTUAL_SUPABASE_URL_HERE'; 
const supabaseKey = 'YOUR_ACTUAL_ANON_KEY_HERE';

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.querySelector("form");

form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevents the page from refreshing

    // Get values from your tcb.html inputs
    const fullname = document.querySelector('input[name="fullname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // 2. Security Check: Password must be 6+ characters
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return; 
    }

    // 3. Send data to the "profiles" table
    const { data, error } = await _supabase
        .from('profiles')
        .insert([
            { 
                full_name: fullname, 
                email: email 
            }
        ]);

    if (error) {
        // This will tell you if there is a database error
        alert("Error: " + error.message);
    } else {
        // This confirms the account is created
        alert("Success! " + fullname + " is now registered.");
        form.reset(); 
    }
});
