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
        header.classList.toggle('sticky', window.scrollY > 100);
    }
});

// Dark mode toggle functionality
const toggleButton = document.querySelector('.toggle');
const root = document.documentElement;

toggleButton.addEventListener('click', () => {
    root.classList.toggle('dark-mode'); // Toggle dark mode class on <html>
    toggleButton.innerHTML = root.classList.contains('dark-mode')
        ? '<i class="bx bx-sun"></i>' // Light mode icon
        : '<i class="bx bx-moon"></i>'; // Dark mode icon
});

// Animate progress bars when the skills section comes into view
document.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.bar span');

    if (skillsSection) {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Check if the skills section is in view
        if (sectionPosition < screenHeight) {
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                if (!bar.style.width || bar.style.width === '0px') {
                    bar.style.width = progress; // Animate width to the desired percentage
                }
            });
        }
    }
});

// Optional: Reset progress bars when scrolling out of view
document.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.bar span');

    if (skillsSection) {
        const sectionBottom = skillsSection.getBoundingClientRect().bottom;
        if (sectionBottom < 0 || sectionBottom > window.innerHeight) {
            progressBars.forEach(bar => {
                bar.style.width = '0'; // Reset progress bar
            });
        }
    }
});