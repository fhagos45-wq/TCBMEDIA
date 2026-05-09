// 1. Connection settings
const supabaseUrl = 'https://ohtmlhoclszmumexjzrz.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc2MiOiJzdXBhYmFzZSIsInJlZGUiOiI6Im9odG1saG9jbHN6bXVtZXhqcnowIn0';

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 2. Wait for the page to load
window.onload = function() {
    const form = document.getElementById("tcbRegistrationForm");

    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault();
            
            // Get values from the inputs
            const fullname = document.querySelector('input[name="fullname"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            // Password check
            if (password.length < 6) {
                alert("Password must be at least 6 characters");
                return; 
            }

            // 3. Insert data into the "profiles" table
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
    }
};
