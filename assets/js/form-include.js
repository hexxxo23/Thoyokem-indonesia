// Form Include Handler - untuk memasukkan form kontak ke halaman lain
document.addEventListener("DOMContentLoaded", function() {
    // Function untuk include form kontak
    function includeContactForm(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            fetch('includes/contact-form.html')
                .then(response => response.text())
                .then(html => {
                    container.innerHTML = html;
                    // Setelah form dimasukkan, jalankan script form
                    loadContactFormScript();
                })
                .catch(error => {
                    console.error('Error loading contact form:', error);
                    container.innerHTML = '<p>Error loading contact form. Please refresh the page.</p>';
                });
        }
    }
    
    // Function untuk load script form kontak
    function loadContactFormScript() {
        // Cek apakah script sudah ada
        if (document.querySelector('script[src="assets/js/contact-form.js"]')) {
            return; // Script sudah ada
        }
        
        // Buat script element baru
        const script = document.createElement('script');
        script.src = 'assets/js/contact-form.js';
        script.onload = function() {
            console.log('Contact form script loaded successfully');
        };
        script.onerror = function() {
            console.error('Failed to load contact form script');
        };
        
        // Tambahkan ke head
        document.head.appendChild(script);
    }
    
    // Auto-detect dan include form jika ada container dengan id "contact-form-container"
    if (document.getElementById('contact-form-container')) {
        includeContactForm('contact-form-container');
    }
    
    // Expose function untuk penggunaan manual
    window.includeContactForm = includeContactForm;
    window.loadContactFormScript = loadContactFormScript;
});

// Function untuk include form ke halaman lain (bisa dipanggil manual)
function addContactFormToPage(containerId) {
    if (typeof includeContactForm === 'function') {
        includeContactForm(containerId);
    } else {
        // Jika function belum tersedia, tunggu DOM ready
        document.addEventListener("DOMContentLoaded", function() {
            if (typeof includeContactForm === 'function') {
                includeContactForm(containerId);
            }
        });
    }
}
