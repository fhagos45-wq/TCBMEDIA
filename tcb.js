// 1. Supabase Connection
const supabaseUrl = 'https://qruvqejwguwivvpomtki.supabase.co';
const supabaseKey = 'sb_publishable_JXH1vjJjK03URYbJlHcLGA_9c12RqPm';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 2. The Registration Function
async function handleRegistration(e) {
    e.preventDefault();

    // This grabs the data from your "tcbRegistrationForm"
    const form = e.target;
    const name = form.querySelector('input[name="fullname"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;

    console.log("Saving to Supabase...");

    // Sending data to your 'members' table
    const { data, error } = await _supabase
        .from('members')
        .insert([
            { 
                full_name: name, 
                email: email 
                // Note: If you want to save password, you must add a 'password' column in Supabase first
            }
        ]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Success! Welcome to TCB, " + name);
        form.reset();
    }
}

// 3. Attach the function to your form
window.onload = () => {
    const mainForm = document.getElementById("tcbRegistrationForm");
    if (mainForm) {
        mainForm.addEventListener("submit", handleRegistration);
    }
};
