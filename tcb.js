const supabaseUrl = 'https://qruvqejwguwivvpomtki.supabase.co';
const supabaseKey = 'sb_publishable_JXH1vjJjK03URYbJlHcLGA_9c12RqPm';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// UI Toggle Logic
function showForm(type) {
    const regSection = document.getElementById('registration-section');
    const loginSection = document.getElementById('login-section');
    const regTab = document.getElementById('tab-register');
    const loginTab = document.getElementById('tab-login');

    if (type === 'login') {
        regSection.style.display = 'none';
        loginSection.style.display = 'block';
        loginTab.classList.add('active');
        regTab.classList.remove('active');
    } else {
        regSection.style.display = 'block';
        loginSection.style.display = 'none';
        regTab.classList.add('active');
        loginTab.classList.remove('active');
    }
}

// Handle Registration
async function handleRegistration(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('input[name="fullname"]').value;
    const email = form.querySelector('input[name="email"]').value;

    const { data, error } = await _supabase
        .from('members')
        .insert([{ full_name: name, email: email }]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Welcome, " + name + "!");
        window.location.href = "https://fhagos45-wq.github.io/TCBMEDIA/tcbhome/tcb-home.html";
    }
}

// Handle Login
async function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[name="loginEmail"]').value;
    
    const { data, error } = await _supabase
        .from('members')
        .select('*')
        .eq('email', email);

    if (data && data.length > 0) {
        alert("Signed in successfully!");
        window.location.href = "https://fhagos45-wq.github.io/TCBMEDIA/tcbhome/tcb-home.html";
    } else {
        alert("Email not found. Please register.");
    }
}

window.onload = () => {
    document.getElementById("tcbRegistrationForm")?.addEventListener("submit", handleRegistration);
    document.getElementById("tcbLoginForm")?.addEventListener("submit", handleLogin);
};
