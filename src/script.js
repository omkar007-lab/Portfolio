// Smooth scrolling when "Explore More" buttons are clicked
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = button.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Get the target section element
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth' // Smooth scroll to the target section
            });
        }
    });
});

// Sticky header functionality on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100); // Toggle sticky class when scrolled more than 100px
    }
});

// Dark mode toggle functionality with persistence
const toggleButton = document.querySelector('.toggle');
const root = document.documentElement;

// Check and apply dark mode based on localStorage on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
    root.classList.add('dark-mode');
    toggleButton.innerHTML = '<i class="bx bx-sun"></i>'; // Light mode icon
} else {
    root.classList.remove('dark-mode');
    toggleButton.innerHTML = '<i class="bx bx-moon"></i>'; // Dark mode icon
}

toggleButton.addEventListener('click', () => {
    const isDarkMode = root.classList.contains('dark-mode');
    // Toggle dark mode class on <html>
    if (isDarkMode) {
        root.classList.remove('dark-mode');
        toggleButton.innerHTML = '<i class="bx bx-moon"></i>'; // Dark mode icon
        localStorage.setItem('dark-mode', 'disabled'); // Store dark mode state
    } else {
        root.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="bx bx-sun"></i>'; // Light mode icon
        localStorage.setItem('dark-mode', 'enabled'); // Store dark mode state
    }
});
