function searchProperties(event) {
    event.preventDefault();

    // Get user input
    const query = document.getElementById("searchQuery").value.trim().toLowerCase();
    const typeFilter = document.getElementById("typeFilter").value.toLowerCase();
    const minPrice = parseInt(document.getElementById("minPrice").value);
    const maxPrice = parseInt(document.getElementById("maxPrice").value);

    // Filter properties based on user input
    const allHouses = document.querySelectorAll(".house-card");
    allHouses.forEach(house => {
        const houseType = house.getAttribute("data-type").toLowerCase();
        const housePrice = parseInt(house.getAttribute("data-price"));
        const matchesType = houseType.includes(typeFilter) || typeFilter === "any";
        const matchesPrice = housePrice >= minPrice && housePrice <= maxPrice;
        const matchesQuery = houseType.includes(query) || housePrice.toString().includes(query);
        if (matchesType && matchesPrice && matchesQuery) {
            house.style.display = "block"; // Show matching houses
        } else {
            house.style.display = "none"; // Hide non-matching houses
        }
    });
}

    const allHouses = document.querySelectorAll(".house-card");
    allHouses.forEach(house => {
        const houseType = house.getAttribute("data-type").toLowerCase();
        const housePrice = parseInt(house.getAttribute("data-price"));
        const matchesType = type === "any" || houseType === type;
        const matchesPrice = housePrice >= minPrice && housePrice <= maxPrice;
        if (matchesType && matchesPrice) {
            house.style.display = "block";
        } else {
            house.style.display = "none"; 
        }
    });


function bookAppointment() {
    alert("Thank you! Your appointment has been booked. We will contact you shortly.");
}

function buyHouse() {
    alert("Thank you for your interest! Please contact us for purchasing details.");
}

function rentHouse() {
    alert("Thank you for your interest! Please contact us for rental details.");
}

function viewHouse() {
    alert("Thank you for your interest! Please contact us to schedule a viewing.");
}
