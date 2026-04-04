/**
 * CONTACT FORM LOGIC
 * Opens the user's default mail client with pre-filled subject/body
 */
function initContactForm() {
    const form = document.getElementById('emailForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Pulls the email address from the data-email attribute we set in index.html
        const email = form.dataset.email || "me@example.com";
        const subject = document.getElementById('subject')?.value || "Contact from Website";
        const message = document.getElementById('message')?.value || "";
        
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        
        window.location.href = mailtoLink;
    });
}

/**
 * THEME LISTENER
 * Updates the Bootstrap theme if the user changes their OS preference while the site is open
 */
function initThemeListener() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
    });
}

/**
 * PRISM CODE BLOCK POLISH
 * Adds necessary classes for line numbers and ensures the toolbar stays visible
 */
function initCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach((block) => {
        // Add line numbers only if it's more than 3 lines
        const lineCount = block.innerText.split('\n').length;
        if (lineCount > 3) {
            block.classList.add('line-numbers');
        }
        
        // Add UI enhancement classes
        block.classList.add('match-braces', 'rainbow-braces');
    });
    
    // Force Prism to highlight and generate the toolbar (Copy button/Lang label)
    if (window.Prism) {
        window.Prism.highlightAll();
    }
}

/**
 * INITIALIZATION
 * Runs all functions once the DOM is ready
 */
function init() {
    initContactForm();
    initThemeListener();
    initCodeBlocks();
    
    // If you had any specific animations or scroll-spy logic, add them here
    console.log("Jekyll Portfolio Template Initialized");
}

// Ensure scripts run whether the DOM is loading or already finished
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}