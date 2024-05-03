import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

document.addEventListener("DOMContentLoaded", function () {
  const restaurantList = document.querySelector(".restaurant-list");

  fetch("data/DATA.json")
    .then((response) => response.json())
    .then((data) => {
      const restaurants = data.restaurants;
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement("div");
        restaurantItem.classList.add("restaurant-item");

        const restaurantImage = document.createElement("img");
        restaurantImage.src = restaurant.pictureId;
        restaurantImage.alt = restaurant.name;

        const restaurantInfo = document.createElement("div");
        restaurantInfo.classList.add("restaurant-info");

        const restaurantName = document.createElement("h2");
        restaurantName.textContent = restaurant.name;

        // Menampilkan minimal salah satu di antara kota, rating, dan/atau deskripsi
        const restaurantDescription = document.createElement("p");
        restaurantDescription.textContent = restaurant.description;

        const restaurantCity = document.createElement("p");
        restaurantCity.textContent = `City: ${restaurant.city}`;

        const restaurantRating = document.createElement("p");
        restaurantRating.textContent = `Rating: ${restaurant.rating}`;

        restaurantInfo.appendChild(restaurantName);
        restaurantInfo.appendChild(restaurantDescription); // Menambahkan deskripsi restoran
        restaurantInfo.appendChild(restaurantCity); // Menambahkan kota restoran
        restaurantInfo.appendChild(restaurantRating); // Menambahkan rating restoran

        restaurantItem.appendChild(restaurantImage);
        restaurantItem.appendChild(restaurantInfo);

        restaurantList.appendChild(restaurantItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
