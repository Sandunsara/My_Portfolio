// Select the skill section and radial bars
let skillSection = document.querySelector('#My_Skills');
let radialBars = document.querySelectorAll('.radial-bar .path');
let skillBars = document.querySelectorAll('.bar span');

window.addEventListener('scroll', () => {
    let top = window.scrollY;
    let offset = skillSection.offsetTop;
    let height = skillSection.offsetHeight;

    // Check if the skill section is in the viewport
    if (top >= offset - window.innerHeight + 100 && top < offset + height) {
        
        // Trigger radial bar animations
        radialBars.forEach(bar => {
            bar.style.animationPlayState = 'running';
        });

        // Trigger horizontal skill bar animations
        skillBars.forEach(bar => {
            bar.style.animationPlayState = 'running';
        });
    } else {
        // Pause animations when section is out of view
        radialBars.forEach(bar => {
            bar.style.animationPlayState = 'paused';
        });
        skillBars.forEach(bar => {
            bar.style.animationPlayState = 'paused';
        });
    }
});
