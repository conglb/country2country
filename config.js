// Cấu hình địa chỉ backend.
// - Chạy trên máy (localhost hoặc mở file trực tiếp): dùng LOCAL_API_URL.
// - Khi deploy (ví dụ GitHub Pages): điền địa chỉ backend đã được host vào PRODUCTION_API_URL.
(function () {
    const LOCAL_API_URL = 'http://localhost:5002';
    const PRODUCTION_API_URL = '';

    const host = window.location.hostname;
    const isLocal = host === '' || host === 'localhost' || host === '127.0.0.1';

    window.APP_CONFIG = {
        API_BASE_URL: (isLocal ? LOCAL_API_URL : PRODUCTION_API_URL).replace(/\/+$/, ''),
    };
})();
