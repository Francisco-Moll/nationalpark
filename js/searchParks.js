"use strict;"

// Populate location dropdown
function populateLocationDropdown() {
    const select = document.getElementById('location');
    locationsArray.forEach(loc => {
        const option = new Option(loc)
        select.add(option);
    });
}



// Init.
document.addEventListener('DOMContentLoaded', populateLocationDropdown);