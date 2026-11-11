#### TODO
- release v0.1
- init Github Action
- public using Github Pages


##### Setup

Backend (chạy trong thư mục `backend/`):

```bash
cd backend
python3.12 -m venv env
source env/bin/activate
pip install -r requirements.txt
python app.py
```

Mặc định backend chạy ở `http://127.0.0.1:5002` và tắt debug. Tuỳ chỉnh bằng biến môi trường:

```bash
FLASK_DEBUG=1 HOST=0.0.0.0 PORT=5002 python app.py
```

Tạo lại database sau khi sửa `sqlite3_countries.sql` (lệnh này xoá và tạo lại bảng `countries`):

```bash
sqlite3 countries.db < sqlite3_countries.sql
```

Frontend: mở `index.html` trong trình duyệt. Địa chỉ backend được cấu hình trong `config.js`;
khi deploy (ví dụ GitHub Pages) cần điền địa chỉ backend đã host vào `PRODUCTION_API_URL`.
