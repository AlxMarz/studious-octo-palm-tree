document.querySelector('.title')?.classList.add('visible');

document.querySelectorAll('.skill-filter').forEach((button) => {
    button.addEventListener('click', () => filterSkills(button));
});

function filterSkills(selectedButton) {
    const selectedCategory = selectedButton.dataset.skillFilter;

    document.querySelectorAll('.skill-filter').forEach((button) => {
        const isSelected = button === selectedButton;
        button.classList.toggle('active', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
    });

    document.querySelectorAll('.skill-category').forEach((category) => {
        category.hidden = selectedCategory !== 'all'
            && category.dataset.category !== selectedCategory;
    });
}