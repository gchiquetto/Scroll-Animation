const boxes = document.querySelectorAll('.box');
const container = document.querySelector('.container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
},
{
    threshold: 1,
    rootMargin: '50px',
}
);

boxes.forEach(box => { 
    observer.observe(box);
})


