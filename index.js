// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Animate numbers in bragging section
function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? Math.ceil(range / (duration / 50)) : -Math.ceil(range / (duration / 50));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            obj.textContent = current + '+';
            clearInterval(timer);
        } else {
            obj.textContent = current + '+';
        }
    }, 50);
}

// Function to start animations
function startAnimations() {
    animateValue("developers-helped", 0, 1700, 2000);
    animateValue("problems-solved", 0, 2300, 2000);
}

// Start animations on load
startAnimations();

// Restart animations every 5 seconds
setInterval(startAnimations, 5000);

// Filter projects function
function filterProjects(tag) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (tag === 'all' || project.getAttribute('data-tags').includes(tag)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });

    const buttons = document.querySelectorAll('.filter button');
    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === tag || (tag === 'all' && button.textContent.toLowerCase() === 'all')) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Open snake game in a new tab when "Expand Game" button is clicked
const expandButton = document.getElementById('expand-game');
const snakeIframe = document.getElementById('snake-iframe');

expandButton.addEventListener('click', function() {
    window.open(snakeIframe.src, '_blank');
});

// Go to top link functionality
const goToTopLink = document.getElementById('go-to-top');
goToTopLink.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});
