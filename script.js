const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
},
{
    threshold: 1,
}
);

boxes.forEach(box => { 
    observer.observe(box);
})