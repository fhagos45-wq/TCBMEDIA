const supabaseUrl = 'https://qruvqejwguwivvpomtki.supabase.co';
const supabaseKey = 'sb_publishable_JXH1vjJjK03URYbJlHcLGA_9c12RqPm';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function handleRegistration(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.querySelector('input[name="fullname"]').value;
    const email = form.querySelector('input[name="email"]').value;

    // This matches the NEW column name: full_name
    const { data, error } = await _supabase
        .from('members')
        .insert([{ 
            full_name: name, 
            email: email 
        }]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Success! " + name + " has been added to TCB Media.");
        form.reset();
    }
}

window.onload = () => {
    const mainForm = document.getElementById("tcbRegistrationForm");
    if (mainForm) {
        mainForm.addEventListener("submit", handleRegistration);
    }
};
