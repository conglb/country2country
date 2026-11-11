// Netlify Function thay cho backend Flask khi deploy: GET /countries/:name
// Dữ liệu lấy từ countries-data.json (xuất từ backend/countries.db bằng scripts/export_countries.py).
import countries from './countries-data.json' with { type: 'json' };

const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
};

export default async (req, context) => {
    if (req.method !== 'GET') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });
    }
    const name = decodeURIComponent(context.params.name || '').trim().toLowerCase();
    const country = countries.find(c => c.name.toLowerCase() === name);
    if (!country) {
        return new Response(JSON.stringify({ error: 'Country not found' }), { status: 404, headers });
    }
    return new Response(JSON.stringify(country), { status: 200, headers });
};

export const config = { path: '/countries/:name' };
