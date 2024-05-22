"use strict;"

// Populate mountain dropdown menu
function populateMountainDropdown() {
    const selectElement = document.getElementById('mtDropdown');

    mountainsArray.forEach(mountain => {
        const option = document.createElement('option');
        option.value = mountain.name;
        option.textContent = mountain.name;
        selectElement.appendChild(option);
    });
}

function updateMountainList() {
    const selectElement = document.getElementById('mtDropdown');
    const selectedMountainName = selectElement.value;
    const mountainDetailsDiv = document.getElementById('mountain_details');
    const mountain = mountainsArray.find(mountain => mountain.name === selectedMountainName);

    if (mountain) {
        mountainDetailsDiv.innerHTML = `
            <div class="container pillbox">
                <h3>${mountain.name}</h3>
                <p><strong>Elevation:</strong> ${mountain.elevation} feet</p>
                <p><strong>Effort:</strong> ${mountain.effort}</p>
                <img src="../images/${mountain.img}" alt="${mountain.name}">
                <p>${mountain.desc}</p>
                <p><strong>Coordinates:</strong> ${mountain.coords.lat}, ${mountain.coords.lng}</p>
            </div>
            `;
    } else {
        mountainDetailsDiv.innerHTML = `
            <div class="container pillbox">    
                <br>
                <p>Please select a mountain to see the details.</p>
            </div>
            `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populateMountainDropdown();
    updateMountainList();
});