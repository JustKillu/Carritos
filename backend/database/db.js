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

export const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE Nombre = ?';
    db.query(query, [username], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
};

export const getUserByUsernameAndPassword = (username, password) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE Nombre = ? AND Clave = ?';
    db.query(query, [username, password], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
};

export const insertUser = (username, password) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (Nombre, Clave) VALUES (?, ?)';
    db.query(query, [username, password], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export const insertCompra = (nombre, apellido, correo, carro, estado) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO compras (Nombre, Apellido, Correo, Carro, Estado) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre, apellido, correo, carro, estado], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export default db;