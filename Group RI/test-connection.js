const { Client } = require('pg');

const client = new Client({
  host: '10.14.8.58',
  port: 5432,
  database: 'groupri',
  user: 'groupri',
  password: 'nopass',
  connectionTimeoutMillis: 8000,
});

(async () => {
  try {
    await client.connect();
    const r = await client.query('SELECT current_database() AS db, current_user AS usr, version() AS ver');
    console.log(JSON.stringify(r.rows[0], null, 2));
    await client.end();
  } catch (e) {
    console.error('CONNECT_ERROR:', e.message);
    process.exit(1);
  }
})();
