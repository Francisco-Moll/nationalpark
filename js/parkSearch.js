"use strict;"

// Populate location dropdown
function populateLocationDropdown() {
    const locationSelect = document.getElementById('location');
    locationsArray.forEach(loc => {
        const option = document.createElement('option');
        option.value = loc;
        option.textContent = loc;
        locationSelect.appendChild(option);
    });
}
// Populate type dropdown
function populateTypeDropdown() {
    const typeSelect = document.getElementById('type');
    parkTypesArray.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });
}

function updateLocationList() {
    const selectedState = document.getElementById('location').value;
    const parkDetails = document.getElementById('park_details');
    parkDetails.innerHTML = ''; // Clear previous results

    if (selectedState) {
        const matchingParks = nationalParksArray.filter(park => park.State === selectedState);

        if (matchingParks.length > 0) {
            matchingParks.forEach(park => {
                const parkDiv = document.createElement('div');
                parkDiv.innerHTML = `
                    <h3>${park.LocationName}</h3>
                    <p>${park.Address}, ${park.City}, ${park.State} ${park.ZipCode}</p>
                    <p>Phone: ${park.Phone}</p>
                    <p>Fax: ${park.Fax}</p>
                    <p>Latitude: ${park.Latitude}, Longitude: ${park.Longitude}</p>
                `;
                parkDetails.appendChild(parkDiv);
            });
        } else {
            parkDetails.innerHTML = '<p>No parks found for the selected state.</p>';
        }
    } else {
        parkDetails.innerHTML = '<p>Please select a state.</p>';
    }
}

// Init.
document.addEventListener('DOMContentLoaded', function () {
    populateLocationDropdown();
    populateTypeDropdown();
});