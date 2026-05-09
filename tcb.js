// Paste your link here inside the quotes
const supabaseUrl = 'https://ohtmlhoclszmumexjzrz.supabase.co'; 

// Use your publishable key from the screenshot here
const supabaseKey = 'sb_publishable_QAG-SyXm9NzZCrSrplu5KQ_xXbk06mIof_YvG-67q4v';

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.querySelector("form");

form.addEventListener("submit", async function(e) {
    e.preventDefault(); 

    const fullname = document.querySelector('input[name="fullname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return; 
    }

    // This sends data to your "profiles" table
    const { data, error } = await _supabase
        .from('profiles')
        .insert([{ full_name: fullname, email: email }]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Success! Account created for " + fullname);
        form.reset(); 
    }
});
