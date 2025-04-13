document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#testimoniale .testimonial");
    let currentIndex = 0;
    const interval = 5000; // 5 secunde
    let timer;

    function show(index) {
        items.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    function next() {
        const nextIndex = (currentIndex + 1) % items.length;
        show(nextIndex);
        resetTimer();
    }

    function prev() {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        show(prevIndex);
        resetTimer();
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(next, interval);
    }

    // Inițializare
    show(0);
    timer = setInterval(next, interval);

    document.getElementById("nextTestimonial").addEventListener("click", next);
    document.getElementById("prevTestimonial").addEventListener("click", prev);
});
