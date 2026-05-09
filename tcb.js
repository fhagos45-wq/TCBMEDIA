const supabaseUrl = 'https://ohtmlhoclszmumexjzrz.supabase.co'; 
// This is your full anon key. Ensure no spaces are added when pasting.
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc2MiOiJzdXBhYmFzZSIsInJlZGUiOiI6Im9odG1saG9jbHN6bXVtZXhqcnowIn0.7_vBfmB9_D9P_f4_D9P_f4_D9P_f4_D9P_f4';

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

window.onload = function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault(); 

            const typedName = document.querySelector('input[name="fullname"]').value;
            const typedEmail = document.querySelector('input[name="email"]').value;

            // Targeting your 'articles' table
            const { data, error } = await _supabase
                .from('articles') 
                .insert([
                    { 
                        full_name: typedName, 
                        email: typedEmail 
                    }
                ]);

            if (error) {
                alert("Error: " + error.message);
            } else {
                alert("Success! " + typedName + " is now in your TCB Database.");
                form.reset(); 
            }
        });
    }
};
