// Contact Form Handler for Thoyokem Indonesia
document.addEventListener("DOMContentLoaded", function() {
    const gmailForm = document.getElementById("gmailForm");
    
    if (gmailForm) {
        gmailForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Get form values
            const nama = document.querySelector('[name="f-name"]').value;
            const perusahaan = document.querySelector('[name="f-company"]').value;
            const email = document.querySelector('[name="f-email"]').value;
            const pesan = document.querySelector('[name="f-comment"]').value;
            
            // Validate required fields
            if (!nama || !email || !pesan) {
                alert("Mohon isi semua field yang wajib diisi (Nama, Email, dan Keterangan)");
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Mohon masukkan format email yang valid");
                return;
            }
            
            // Prepare Gmail URL
            const tujuan = "thoyokemindonesia@gmail.com";
            const subject = encodeURIComponent("Pesan dari Website Thoyokem Indonesia");
            const body = encodeURIComponent(
                `Nama: ${nama}\n` +
                `Perusahaan: ${perusahaan || 'Tidak diisi'}\n` +
                `Email: ${email}\n\n` +
                `Keterangan:\n${pesan}\n\n` +
                `---\nPesan ini dikirim dari website Thoyokem Indonesia`
            );
            
            // Open Gmail compose window
            const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${tujuan}&su=${subject}&body=${body}`;
            window.open(gmailURL, '_blank');
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            gmailForm.reset();
        });
    }
    
    // Function to show success message
    function showSuccessMessage() {
        const popup = document.querySelector('.form__popup');
        if (popup) {
            popup.style.display = 'block';
            
            // Hide popup after 3 seconds
            setTimeout(() => {
                popup.style.display = 'none';
            }, 3000);
        }
    }
    
    // Form validation on input
    const formInputs = gmailForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
    
    // Field validation function
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('name');
        
        clearFieldError(field);
        
        if (fieldName === 'f-name' && value.length < 3) {
            showFieldError(field, 'Nama harus minimal 3 karakter');
        } else if (fieldName === 'f-company' && value.length < 3) {
            showFieldError(field, 'Nama perusahaan harus minimal 3 karakter');
        } else if (fieldName === 'f-email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            showFieldError(field, 'Format email tidak valid');
        }
    }
    
    // Show field error
    function showFieldError(field, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#ff0000';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#ff0000';
    }
    
    // Clear field error
    function clearFieldError(field) {
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
        field.style.borderColor = '';
    }
});
