function loadCountryData(countryId) {
    const countrySelect = document.getElementById(countryId);
    const countryValue = countrySelect.value;
    const countryInfoDiv = document.getElementById(`${countryId}-info`);

    if (!countryValue) {
        countryInfoDiv.replaceChildren();
        return;
    }

    const apiBase = window.APP_CONFIG && window.APP_CONFIG.API_BASE_URL;
    if (!apiBase) {
        countryInfoDiv.textContent = 'Chưa cấu hình địa chỉ API (xem config.js).';
        return;
    }

    countryInfoDiv.textContent = 'Đang tải...';

    fetch(`${apiBase}/countries/${encodeURIComponent(countryValue)}`)
        .then(response => {
            if (response.status === 404) {
                throw new Error('NOT_FOUND');
            }
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Bỏ qua kết quả cũ nếu người dùng đã chọn quốc gia khác trong lúc chờ.
            if (countrySelect.value === countryValue) {
                displayCountryData(data, countryInfoDiv);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            if (countrySelect.value !== countryValue) {
                return;
            }
            countryInfoDiv.textContent = error.message === 'NOT_FOUND'
                ? 'Không tìm thấy dữ liệu cho quốc gia này.'
                : 'Không thể tải dữ liệu.';
        });
}

function createImage(src, alt) {
    if (!src) {
        return null;
    }
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.width = 100;
    // Ẩn ảnh nếu đường dẫn hỏng thay vì hiện biểu tượng ảnh lỗi.
    img.addEventListener('error', () => img.remove());
    return img;
}

function createField(label, value) {
    const p = document.createElement('p');
    p.textContent = `${label}: ${value === null || value === undefined || value === '' ? 'Chưa có dữ liệu' : value}`;
    return p;
}

function displayCountryData(data, container) {
    const heading = document.createElement('h2');
    heading.textContent = data.name;

    const population = typeof data.population === 'number'
        ? data.population.toLocaleString('vi-VN')
        : data.population;

    const nodes = [
        heading,
        createImage(data.flag, `Quốc kỳ ${data.name}`),
        createImage(data.coat_of_arms, `Quốc huy ${data.name}`),
        createImage(data.architecture_image, `Kiến trúc ${data.name}`),
        createField('Dân số', population),
        createField('GDP', data.gdp),
        createField('Chi phí sinh hoạt', data.cost_of_living),
        createField('Chỉ số và xếp hạng', data.index_rankings),
    ].filter(Boolean);

    container.replaceChildren(...nodes);
}
