// 1. Connection settings using your Legacy anon key
const supabaseUrl = 'https://ohtmlhoclszmumexjzrz.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc2MiOiJzdXBhYmFzZSIsInJlZGUiOiI6Im9odG1saG9jbHN6bXVtZXhqcnowIn0.7_vBfmB9_D9P_f4_D9P_f4_D9P_f4_D9P_f4';

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 2. Wait for the page to be ready
window.onload = function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault(); 

            // Get input values from your HTML form
            const typedName = document.querySelector('input[name="fullname"]').value;
            const typedEmail = document.querySelector('input[name="email"]').value;

            // 3. Send to the 'articles' table shown in your editor
            const { data, error } = await _supabase
                .from('articles') 
                .insert([
                    { 
                        full_name: typedName, 
                        email: typedEmail 
                    }
                ]);

            if (error) {
                // If it says "Invalid API key", use the Copy button in Supabase
                alert("Error: " + error.message);
            } else {
                alert("Success! " + typedName + " is now in your TCB Database.");
                form.reset(); 
            }
        });
    }
};
