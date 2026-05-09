// 1. Connection settings (Already filled with your link)
const supabaseUrl = 'https://ohtmlhoclszmumexjzrz.supabase.co'; 
const supabaseKey = 'sb_publishable_QAG-SyXm9NzZCrSrplu5KQ_xXbk06mIof_YvG-67q4v';

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.querySelector("form");

form.addEventListener("submit", async function(e) {
    e.preventDefault(); // This stops the page from refreshing

    // Capture the data from your tcb.html input fields
    const fullname = document.querySelector('input[name="fullname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // 2. Simple Security Check
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return; 
    }

    // 3. Send the data to your "profiles" table in Supabase
    const { data, error } = await _supabase
        .from('profiles')
        .insert([
            { 
                full_name: fullname, 
                email: email 
            }
        ]);

    if (error) {
        // If there is a problem (like a missing table), show the error
        alert("Error: " + error.message);
    } else {
        // If it works, show success!
        alert("Success! Account created for " + fullname);
        form.reset(); // Clears the boxes for the next person
    }
});
