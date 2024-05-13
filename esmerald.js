function buyHouse() {
    alert("Thank you for your interest! Please contact us for purchasing details.");
}

function rentHouse() {
    alert("Thank you for your interest! Please contact us for rental details.");
}

function viewHouse() {
    alert("Thank you for your interest! Please contact us to schedule a viewing.");
}
const houses = [
    { type: "apartment", price: 200000 },
    { type: "beach-house", price: 500000 },
    { type: "cabin", price: 300000 },
    { type: "bungalow", price: 400000 },
    // Add more houses as needed
  ];
  
  const searchForm = document.getElementById("search-form");
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");
  const houseType = document.getElementById("house-type");
  const housesContainer = document.getElementById("houses-container");
  
  function renderHouses() {
    housesContainer.innerHTML = "";
    const minPrice = parseInt(minPriceInput.value) || 0;
    const maxPrice = parseInt(maxPriceInput.value) || 5000000;
    const selectedHouseType = houseType.value;
  
    houses.forEach((house) => {
      if ((selectedHouseType === "all" || house.type === selectedHouseType) && house.price >= minPrice && house.price <= maxPrice) {
        const houseDiv = document.createElement("div");
        houseDiv.classList.add("house");
        houseDiv.textContent = `Type: ${house.type}, Price: $${house.price.toLocaleString()}`;
        housesContainer.appendChild(houseDiv);
      }
    });
  }
  
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderHouses();
  });
  
  renderHouses();
  
function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById("contactForm");
    if (form.checkValidity()) {
        alert("Form submitted successfully!");
        form.reset(); 
    } else {
        alert("Please fill in all required fields correctly.");
    }
}
