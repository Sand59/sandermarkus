document.addEventListener('DOMContentLoaded', () => {
    // Parallax
    document.addEventListener("mousemove", function(e) {
        this.querySelectorAll('.layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;

            gsap.to(layer, {
                duration: 0.6,
                x: x,
                y: y,
                ease: "power3.out"
            });
        });
    });

    // Mouse follow
    const mouseFollow = document.querySelector('.mouse-follow');
    
    window.addEventListener('mousemove', (event) => {
        gsap.to(mouseFollow, {
            duration: 1,
            x: event.clientX,
            y: event.clientY,
            ease: "power3.out"
        });
    });
});
