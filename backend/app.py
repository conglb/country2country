import os
import sqlite3

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Luôn mở DB nằm cạnh file này, không phụ thuộc thư mục đang chạy lệnh.
DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'countries.db')


def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/countries/<country_name>', methods=['GET'])
def get_country_data(country_name):
    conn = get_db_connection()
    try:
        # COLLATE NOCASE: "vietnam", "Vietnam" và "VIETNAM" đều khớp.
        country = conn.execute(
            'SELECT * FROM countries WHERE name = ? COLLATE NOCASE',
            (country_name.strip(),),
        ).fetchone()
    finally:
        conn.close()

    if country is None:
        return jsonify({'error': 'Country not found'}), 404

    country_data = {
        'name': country['name'],
        'flag': country['flag_url'],
        'coat_of_arms': country['coat_of_arms_url'],
        'architecture_image': country['architecture_image_url'],
        'population': country['population'],
        'gdp': country['gdp'],
        'cost_of_living': country['cost_of_living'],
        'index_rankings': country['index_rankings']
    }

    return jsonify(country_data)


if __name__ == '__main__':
    # Mặc định chỉ lắng nghe trên máy cục bộ và tắt debug.
    # Bật khi cần: FLASK_DEBUG=1 HOST=0.0.0.0 PORT=5002 python app.py
    app.run(
        debug=os.environ.get('FLASK_DEBUG') == '1',
        host=os.environ.get('HOST', '127.0.0.1'),
        port=int(os.environ.get('PORT', '5002')),
    )
