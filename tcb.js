// 1. Supabase Connection Details
const supabaseUrl = 'https://qruvqejwguwivvpomtki.supabase.co';
const supabaseKey = 'sb_publishable_JXH1vjJjK03URYbJlHcLGA_9c12RqPm';

// 2. Initialize the Supabase Client
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 3. The Registration Function
async function handleRegistration(e) {
    e.preventDefault();

    // Grab values from your HTML layout
    const form = e.target;
    const name = form.querySelector('input[name="fullname"]').value;
    const email = form.querySelector('input[name="email"]').value;

    console.log("Sending data to Supabase...");

    // Insert data into your 'members' table
    const { data, error } = await _supabase
        .from('members')
        .insert([
            { 
                full_name: name, 
                email: email 
            }
        ]);

    // 4. Handle the Result
    if (error) {
        console.error("Supabase Error:", error.message);
        alert("Error: " + error.message);
    } else {
        console.log("Success!");
        alert("Success! Welcome to TCB Media, " + name);
        
        // Redirect the user to the TCB Home page
        window.location.href = "https://fhagos45-wq.github.io/TCBMEDIA/tcbhome/tcb-home.html";
    }
}

// 5. Attach the function to the form when the page loads
window.onload = () => {
    const mainForm = document.getElementById("tcbRegistrationForm");
    if (mainForm) {
        mainForm.addEventListener("submit", handleRegistration);
    } else {
        console.error("Form 'tcbRegistrationForm' not found!");
    }
};
