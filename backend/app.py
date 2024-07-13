from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect('countries.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/countries/<country_name>', methods=['GET'])
def get_country_data(country_name):
    conn = get_db_connection()
    country = conn.execute('SELECT * FROM countries WHERE name = ?', (country_name,)).fetchone()
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
    app.run(debug=True, host='0.0.0.0', port=5002)
