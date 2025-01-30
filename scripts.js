document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links 
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Contact link handler
    const contactLink = document.querySelector('a[href^="mailto:"]');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            
            // Try to open the email client
            window.location.href = this.href;
            
            // Fallback: After a short delay, check if the email client opened
            setTimeout(function() {
                // If the page is still here, assume the email client didn't open
                if (document.hasFocus()) {
                    alert('Please email us at: ' + email);
                }
            }, 500);
        });
    }
});