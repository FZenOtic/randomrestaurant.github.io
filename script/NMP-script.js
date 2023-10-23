/* js of increase and decrease button */
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const counterDisplay = document.getElementById('counter');
const addBtn = document.getElementById('addBtn');

let counterValue = 0; // Initial counter value

function updateCounter() {
    counterDisplay.textContent = counterValue;
}

increaseBtn.addEventListener('click', () => {
    if (counterValue < 10) {
        counterValue++;
        updateCounter();
    }
});

decreaseBtn.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
});

updateCounter();

addBtn.addEventListener('click', () => {
    let nameList = JSON.parse(localStorage.getItem("nameList")) || [];

    const selectedRestaurants = [];

    for (let i = 0; i < counterValue; i++) {
        const randomRestaurant = getRandomRestaurant(selectedRestaurants);
        selectedRestaurants.push({ text: randomRestaurant, id: Date.now() });
    }

    nameList = nameList.concat(selectedRestaurants);

    localStorage.setItem("nameList", JSON.stringify(nameList));

    window.location.href = 'HomePage.html';
});

addMenuBtnInpopup.addEventListener("click", () => {
    addMenuBtnInpopup.style.display = "none"; // ทำให้ปุ่มหายไป
});

const addMenuBtn = document.querySelector(".addMenuBtn");

addMenuBtn.addEventListener("click", () => {
    addMenuBtn.style.display = "none"; 
});

function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.classList.toggle("active");
    }
  }

function getRandomRestaurant(selectedRestaurants) {
    const restaurants = ["มีเส้น ก๋วยเตี๋ยวเรือ รสเจ็บ ใจเสาะ", "บะหมี่ปฏิพล", "ร้านโก๋ตี๋กี๋หมวย", "ร้านก๋วยเตี๋ยวหมูตุ๋น เนื้อตุ๋น", "ร้านก้วยเตี๋ยวยายเตี้ย", "ร้าน 1110 ก๋วยเตี๋ยวต้มยำซี่โครงอ่อน", "ร้านก๋วยเตี๋ยวดู๋ดี๋พี่แป้ง", "ก๋วยเตี๋ยวเรือพ่นไฟ", "ก๋วยเตี๋ยวเรือตะแคงหม้อซดหลัง", "ร้านก๋วยเตี๋ยวสูตรแม่บุญธรรม"];

    const availableRestaurants = restaurants.filter(restaurant => !selectedRestaurants.some(selected => selected.text === restaurant));

    if (availableRestaurants.length === 0) {
        return "No available restaurants";
    }

    const randomIndex = Math.floor(Math.random() * availableRestaurants.length);
    return availableRestaurants[randomIndex];
}

function addMenuToWheel(restaurantName) {
    // Get the current nameList from local storage
    let nameList = JSON.parse(localStorage.getItem("nameList")) || [];

    // Check if the restaurant is already in the list
    const isRestaurantAdded = nameList.some(restaurant => restaurant.text === restaurantName);

    if (!isRestaurantAdded) {
        // Add the selected restaurant to the nameList
        const restaurant = { text: restaurantName, id: Date.now() };
        nameList.push(restaurant);
        alert("This restaurant is added.");
        // Update the nameList in local storage
        localStorage.setItem("nameList", JSON.stringify(nameList));

        // Render the wheel on the homepage
        renderWheel();
        
    } else {
        alert("This restaurant is already added.");
    }
}

function renderWheel() {
    const wheelContainer = document.getElementById("wheel-container");
    wheelContainer.innerHTML = ""; // Clear previous content

    // Get the selected restaurants from local storage
    const nameList = JSON.parse(localStorage.getItem("nameList")) || [];

    const ul = document.createElement("ul");

    // Filter and display only the selected restaurants
    const selectedRestaurants = nameList.filter(restaurant => restaurant.selected);

    selectedRestaurants.forEach((restaurant) => {
        const li = document.createElement("li");
        li.textContent = restaurant.text;
        ul.appendChild(li);
    });

    wheelContainer.appendChild(ul);
}

window.addEventListener('load', renderWheel);


// Add an event listener for "blog-closeBtn"
document.getElementById("closeBtn-1").addEventListener("click", function () {
    togglePopup("popup-1");
  });

document.getElementById("closeBtn-2").addEventListener("click", function () {
    togglePopup("popup-2");
});

document.getElementById("closeBtn-3").addEventListener("click", function () {
    togglePopup("popup-3");
});
  
document.getElementById("closeBtn-4").addEventListener("click", function () {
    togglePopup("popup-4");
});

document.getElementById("closeBtn-5").addEventListener("click", function () {
    togglePopup("popup-5");
});

document.getElementById("closeBtn-6").addEventListener("click", function () {
    togglePopup("popup-6");
});


document.getElementById("closeBtn-7").addEventListener("click", function () {
    togglePopup("popup-7");
});

document.getElementById("closeBtn-8").addEventListener("click", function () {
    togglePopup("popup-8");
});

document.getElementById("closeBtn-9").addEventListener("click", function () {
    togglePopup("popup-9");
});

document.getElementById("closeBtn-10").addEventListener("click", function () {
    togglePopup("popup-10");
});
  // Repeat the above for other "blog-closeBtn" elements, using the correct IDs
  

