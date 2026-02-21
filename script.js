const cara1 = document.querySelector('#carousel1')
const cara2 = document.querySelector('#carousel2')
// in script.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.title').classList.add('visible');
});

const carousel = new bootstrap.Carousel(cara1, {
  interval: 2000,
  touch: false
})
const carousel2 = new bootstrap.Carousel(cara2, {
  interval: 2000,
  touch: false
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