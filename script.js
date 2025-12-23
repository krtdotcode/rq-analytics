// Animate cost display
function animateCost() {
    const costElement = document.getElementById('cost-amount');
    let current = 0;
    const target = 12500; // Midpoint of 10-15k
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        costElement.textContent = Math.floor(current).toLocaleString();
    }, 30);
}

// Animate bar chart
function animateBars() {
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, index * 500);
    });
}

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    animateCost();
    animateBars();
});
