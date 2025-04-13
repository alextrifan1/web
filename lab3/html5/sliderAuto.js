document.addEventListener("DOMContentLoaded", () => {
    const images = [
        { src: "imagini/daciaDuster.jpg", caption: "Dacia Duster" },
        { src: "imagini/bmws3.jpg", caption: "BMW Seria 3" },
        { src: "imagini/audia4.jpg", caption: "Audi A4" },
        { src: "imagini/tmd3.jpg", caption: "Tesla Model 3" }
    ];

    let currentIndex = 0;
    let isPlaying = true;
    let timer;
    let interval = 4000;

    const mainImg = document.getElementById("main-slider-img");
    const caption = document.getElementById("slider-caption");
    const playBtn = document.getElementById("togglePlay");
    const intervalSelect = document.getElementById("intervalSelect");
    const repeatCheckbox = document.getElementById("repeatToggle");

    function showImage(index) {
        mainImg.src = images[index].src;
        caption.textContent = images[index].caption;
        currentIndex = index;
    }

    function nextImage() {
        if (currentIndex < images.length - 1) {
            showImage(currentIndex + 1);
        } else if (repeatCheckbox.checked) {
            showImage(0); // reluăm de la început
        } else {
            stopSlideshow(); // oprim dacă nu repetăm
        }
    }

    function prevImage() {
        const prev = (currentIndex - 1 + images.length) % images.length;
        showImage(prev);
        resetTimer();
    }

    function startSlideshow() {
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        timer = setInterval(nextImage, interval);
    }

    function stopSlideshow() {
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i> Play';
        clearInterval(timer);
    }

    function togglePlayPause() {
        isPlaying ? stopSlideshow() : startSlideshow();
    }

    function resetTimer() {
        if (isPlaying) {
            clearInterval(timer);
            timer = setInterval(nextImage, interval);
        }
    }

    // === Evenimente ===
    document.getElementById("nextSlide").addEventListener("click", () => {
        nextImage();
        resetTimer();
    });

    document.getElementById("prevSlide").addEventListener("click", () => {
        prevImage();
        resetTimer();
    });

    playBtn.addEventListener("click", togglePlayPause);

    intervalSelect.addEventListener("change", () => {
        interval = parseInt(intervalSelect.value);
        resetTimer();
    });

    // Start
    showImage(currentIndex);
    startSlideshow();
});
