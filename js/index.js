console.log("Screen Width: " + window.innerWidth + "px");
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

document.getElementById("home_logo").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

var typed = new Typed(".auto-type", {
    strings: [
        "Indulge in <span class='comfort_span'>Classic Comfort Food</span> 🍽️",
        "Crispy, Golden <span class='fries_span'>Hand-Cut Fries</span> 🍟",
        "A Feast of <span class='delicious_span'>Delicious Possibilities</span> ✨",
        "Savor Every Bite of <span class='melty_span'>Cheesy Goodness</span> 🧀",
        "Big Flavors, <span class='monster_span'>Monster Portions</span> 🍔",
        "Your Next <span class='food_span'>Bite of Happiness</span> Starts Here! 🥪"
    ],
    typeSpeed: 50,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
});

const imageFiles = [
    'assets/drinks_1.jpg',
    'assets/drinks_2.jpg',
    'assets/drinks_3.jpg',
    'assets/food_1.jpg',
    'assets/food_2.jpg',
    'assets/food_3.jpg',
    'assets/food_4.jpg',
    'assets/food_5.jpg',
    'assets/food_6.jpg',
    'assets/food_7.jpg',
    'assets/food_8.jpg',
    'assets/food_9.jpg',
    'assets/food_10.jpg',
    'assets/food_11.jpg',
    'assets/food_12.jpg',
    'assets/food_13.jpg',
    'assets/food_14.jpg',
    'assets/food_15.jpg',
    'assets/menu.jpg',
    'assets/DeliciosaEatery_logo.jpg'
];

const galleryContainer = document.querySelector('.gallery-container');

// Loop through the image array and add each image to the gallery container
imageFiles.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = 'Gallery Image';
    img.style.cursor = 'pointer'; // Change cursor to pointer to indicate clickable images
    img.addEventListener('click', () => {
        window.open(image, '_blank'); // Open image in a new tab
    });
    galleryContainer.appendChild(img);
});