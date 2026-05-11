// 1. Connection Details
const supabaseUrl = 'https://qruvqejwguwivvpomtki.supabase.co';
const supabaseKey = 'sb_publishable_JXH1vjJjK03URYbJlHcLGA_9c12RqPm';

// 2. Initialize the Supabase Client
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 3. The Function to Send Data to your 'members' table
async function registerUser(e) {
    e.preventDefault(); // Prevents the page from refreshing

    // Get values from your HTML input fields
    const nameInput = document.getElementById("userName").value;
    const emailInput = document.getElementById("userEmail").value;

    console.log("Sending data to Supabase...");

    // Insert data into the 'members' table
    const { data, error } = await _supabase
        .from('members')
        .insert([
            { 
                full_name: nameInput, 
                email: emailInput 
            }
        ]);

    if (error) {
        console.error("Error saving data:", error.message);
        alert("Registration Failed: " + error.message);
    } else {
        console.log("Data saved successfully!");
        alert("Success! Welcome to TCB Media, " + nameInput);
        
        // Clear the form after success
        document.getElementById("tigrayForm").reset();
    }
}

// 4. Connect the function to your "Register" button
window.onload = () => {
    const registrationForm = document.getElementById("tigrayForm");
    if (registrationForm) {
        registrationForm.addEventListener("submit", registerUser);
    } else {
        console.error("Form with ID 'tigrayForm' not found in HTML.");
    }
};
