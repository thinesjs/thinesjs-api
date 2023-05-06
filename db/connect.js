import { createPool } from 'mysql2';
import {} from 'dotenv/config';

var conn = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
}); 
 
conn.getConnection(function(err) {if (err) throw err;});
export default conn;