import mysql from 'mysql';


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'carritos'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos... http://localhost:3000');
});

export default db;
