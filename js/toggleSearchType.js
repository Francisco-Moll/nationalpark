"use strict;"

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('park_location').addEventListener('click', toggleDropdowns);
    document.getElementById('park_type').addEventListener('click', toggleDropdowns);
    toggleDropdowns();  // Initial call to set the correct state on load
});

function toggleDropdowns() {
    var locationDropdown = document.getElementById('locationDropdown');
    var typeDropdown = document.getElementById('typeDropdown');
    
    var searchByLocation = document.getElementById('park_location').checked;
    
    if (searchByLocation) {
        locationDropdown.style.display = 'block';
        typeDropdown.style.display = 'none';
    } else {
        locationDropdown.style.display = 'none';
        typeDropdown.style.display = 'block';
    }
}