// 1. Connection settings - Fixed with your specific credentials
const supabaseUrl = 'https://ohtmlhoclszmumexjzrz.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc2MiOiJzdXBhYmFzZSIsInJlZGUiOiI6Im9odG1saG9jbHN6bXVtZXhqcnowIn0';

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 2. This waits for the HTML to be ready before looking for the form
window.onload = function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault(); // Stop page refresh
            
            // Capture the user's input
            const fullname = document.querySelector('input[name="fullname"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            // Security check
            if (password.length < 6) {
                alert("Password must be at least 6 characters");
                return; 
            }

            // 3. Send data to Supabase
            const { data, error } = await _supabase
                .from('profiles')
                .insert([{ full_name: fullname, email: email }]);

            if (error) {
                // If there is an error (like RLS security), this will tell us
                alert("Error: " + error.message);
            } else {
                alert("Success! Account created for " + fullname);
                form.reset(); 
            }
        });
    } else {
        console.error("Form not found in tcb.html. Please check your HTML tags.");
    }
};
