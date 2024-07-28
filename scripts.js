

document.addEventListener('DOMContentLoaded', function () {
});

let getStartedBtn = document.getElementById('getStartedBtn');
let welcomeMessage = document.getElementById('welcomeMessage');
let scrollToTopBtn = document.getElementById('scrollToTopBtn');

getStartedBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior

    welcomeMessage.innerHTML = `
        <h2>Welcome to Our Product</h2>
        <p>We're excited to have you here! Explore our features and see how we can help you achieve your goals.</p>
    `;
    welcomeMessage.style.display = 'block'; // Make sure the welcome message is visible

    welcomeMessage.scrollIntoView({
        behavior: 'smooth'
    });
});

function toggleScrollToTopButton() {
    if (window.scrollY > 300) { // Show button after scrolling down 300px
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

window.addEventListener('scroll', toggleScrollToTopButton);

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
