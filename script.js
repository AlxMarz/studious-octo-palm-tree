const carousel1 = document.querySelector('#cara1')
const carousel2 = document.querySelector('#cara2')
// in script.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.title').classList.add('visible');
});

const carousel = new bootstrap.Carousel(carousel1, {
    interval: 3000,
    touch: true
})
const carousel3 = new bootstrap.Carousel(carousel2, {
    interval: 4000,
    touch: true
})




function filterSkillsBadge(category) {
    const categories = document.querySelectorAll('.skill-category');
    const buttons = document.querySelectorAll('.btn-group button');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter categories
    categories.forEach(cat => {
        if (category === 'all') {
            cat.style.display = 'block';
        } else if (cat.getAttribute('data-category') === category) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
}