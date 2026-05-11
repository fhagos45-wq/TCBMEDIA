const supabaseUrl = 'https://qruvqejwguwivvpomtki.supabase.co';
const supabaseKey = 'sb_publishable_JXH1vjJjK03URYbJlHcLGA_9c12RqPm';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

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

// Logic for Registration and Login remains standard for Supabase calls.
// Ensure you have the 'members' table set up in your Supabase dashboard.
