// 1. Connection settings (Already fixed for you)
const supabaseUrl = 'https://ohtmlhoclszmumexjzrz.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc2MiOiJzdXBhYmFzZSIsInJlZGUiOiI6Im9odG1saG9jbHN6bXVtZXhqcnowIn0.7_vBfmB9_D9P_f4_D9P_f4_D9P_f4_D9P_f4';

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

window.onload = function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault(); 

            // Get the information typed into the website
            const user_name = document.querySelector('input[name="fullname"]').value;
            const user_email = document.querySelector('input[name="email"]').value;

            // 2. The Order: Send to 'articles' table into 'full_name' and 'email' columns
            const { data, error } = await _supabase
                .from('articles') // Must match your new table name
                .insert([
                    { 
                        full_name: user_name, // Must match the column in your screenshot
                        email: user_email      // Must match the column in your screenshot
                    }
                ]);

            if (error) {
                alert("Error: " + error.message);
            } else {
                alert("Success! " + user_name + " is now saved in the articles table.");
                form.reset(); 
            }
        });
    }
};
