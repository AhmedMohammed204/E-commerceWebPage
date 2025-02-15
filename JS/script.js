const slider = document.querySelector(".product-slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function checkButtons() {
    prevBtn.classList.toggle("hidden", slider.scrollLeft === 0);
    nextBtn.classList.toggle(
        "hidden",
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth
    );
}

nextBtn.addEventListener("click", function () {
    slider.scrollBy({ left: 220, behavior: "smooth" });
});

prevBtn.addEventListener("click", function () {
    slider.scrollBy({ left: -220, behavior: "smooth" });
});

slider.addEventListener("scroll", checkButtons);
checkButtons();

let backToTopBtn = document.getElementById("backToTop");




window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
