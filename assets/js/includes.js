/**
 * Include Header and Footer - Thoyokem Indonesia
 * Load header.html and footer.html into pages
 */

// Function to load HTML content
async function loadHTML(url, targetElementId) {
    try {
        // Use correct path from root directory
        const fullUrl = url;
        
        console.log('Loading HTML from:', fullUrl);
        
        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = html;
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error loading ${url}:`, error);
        return false;
    }
}

// Function to initialize header and footer
async function initializeIncludes() {
    console.log('Initializing includes...');
    
    // Load header
    const headerLoaded = await loadHTML('includes/header.html', 'header-container');
    console.log('Header loaded:', headerLoaded);
    
    // Load footer  
    const footerLoaded = await loadHTML('includes/footer.html', 'footer-container');
    console.log('Footer loaded:', footerLoaded);
    
    // Load contact form
    const contactFormLoaded = await loadHTML('includes/contact-form.html', 'contact-form-container');
    console.log('Contact form loaded:', contactFormLoaded);
    
    // Initialize header functionality after loading
    if (headerLoaded) {
        initializeHeaderFunctionality();
    }
    
    // Initialize contact form functionality after loading
    if (contactFormLoaded) {
        initializeContactForm();
    }
    
    return headerLoaded && footerLoaded && contactFormLoaded;
}

// Function to initialize header functionality (logo switching, mobile menu, etc.)
function initializeHeaderFunctionality() {
    // Initialize logo switching on scroll
    const heroImage = document.getElementById("heroImage");
    if (heroImage) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                heroImage.src = "assets/images/logos/tykem.png";
            } else {
                heroImage.src = "assets/images/logos/tykemwhite.png";
            }
        });
    }

    // Initialize mobile menu toggle
    const gambar = document.getElementById('heroImage');
    let isGambar1 = true;

    window.toggleGambar = function() {
        if (gambar) {
            gambar.src = isGambar1 ? 'assets/images/logos/tykem.png' : 'assets/images/logos/tykemwhite.png';
            isGambar1 = !isGambar1;
        }
    }

    // Initialize mobile menu functionality
    const burger = document.querySelector(".mobileMenuHandler");
    const mobileMenu = document.querySelector(".header__mobile-content");
    const header = document.querySelector("header");

    if (burger && mobileMenu && header) {
        // BURGER TOGGLE
        burger.addEventListener("click", function () {
            const isOpen = mobileMenu.classList.contains("menu-open");

            // Lock/unlock body scroll
            if (!isOpen) {
                const scrollY = window.scrollY;
                document.body.style.setProperty('--scroll-y', `-${scrollY}px`);
                document.body.classList.add("lock-scroll");
            } else {
                const scrollY = document.body.style.getPropertyValue('--scroll-y');
                document.body.classList.remove("lock-scroll");
                document.body.style.removeProperty('--scroll-y');
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }

            // Toggle menu & burger
            mobileMenu.classList.toggle("menu-open");
            burger.classList.toggle("burger-active");

            // Add header_filled when menu is opened
            if (!header.classList.contains("header_filled")) {
                header.classList.add("header_filled");
            }
        });

        // SCROLL BEHAVIOR
        window.addEventListener("scroll", function () {
            const isMenuOpen = mobileMenu.classList.contains("menu-open");

            if (window.scrollY > 50 || isMenuOpen) {
                header.classList.add("header_filled");
            } else {
                header.classList.remove("header_filled");
            }
        });

        // CLICK OUTSIDE TO CLOSE MENU
        document.addEventListener("click", function (e) {
            const isInsideBurger = burger.contains(e.target);
            const isInsideMenu = mobileMenu.contains(e.target);

            if (!isInsideBurger && !isInsideMenu) {
                mobileMenu.classList.remove("menu-open");
                burger.classList.remove("burger-active");

                // Remove header_filled if scrollY <= 50
                if (window.scrollY <= 50) {
                    header.classList.remove("header_filled");
                }
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeIncludes();
});

// Export functions for global use
window.initializeIncludes = initializeIncludes;
window.toggleGambar = window.toggleGambar || function() {
    console.log('toggleGambar function not yet initialized');
};

// Function to initialize contact form functionality
function initializeContactForm() {
    console.log('Initializing contact form...');
    
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
        
        // Initialize form validation
        initializeFormValidation(gmailForm);
    }
}

// Function to initialize form validation
function initializeFormValidation(gmailForm) {
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
