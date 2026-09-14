require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,//aca dice que si no hay puerto 8000 utilice el 3000
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  }
};