function loadCountryData(countryId) {
    const countrySelect = document.getElementById(countryId);
    const countryValue = countrySelect.value;
    const countryInfoDiv = document.getElementById(`${countryId}-info`);

    if (countryValue) {
        const apiUrl = `http://localhost:5002/countries/${countryValue}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayCountryData(data, countryInfoDiv);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                countryInfoDiv.innerHTML = 'Không thể tải dữ liệu.';
            });
    } else {
        countryInfoDiv.innerHTML = '';
    }
}

function displayCountryData(data, container) {
    container.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.flag}" alt="Flag of ${data.name}" width="100">
        <img src="${data.coat_of_arms}" alt="Coat of arms of ${data.name}" width="100">
        <img src="${data.architecture_image}" alt="Architecture of ${data.name}" width="100">
        <p>Dân số: ${data.population}</p>
        <p>GDP: ${data.gdp}</p>
        <p>Chi phí sinh hoạt: ${data.cost_of_living}</p>
        <p>Chỉ số và xếp hạng: ${data.index_rankings}</p>
    `;
}
