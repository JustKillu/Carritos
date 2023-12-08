import con from "../database/db.js";

class ComprasController {

  todos() {
    return new Promise((resolve, reject) => {
      con.query("SELECT * FROM compras", function (error, results, fields) {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log("Todos los registros son: ", results);
          resolve(results);
        }
      });
    });
  }

  new(infodb) {
    return new Promise((resolve, reject) => {
      const { id, Nombre, Apellido, Correo, Carro, Estado } = infodb;
  
      const query = 'INSERT INTO compras (id, Nombre, Apellido, Correo, Carro, Estado) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [id, Nombre, Apellido, Correo, Carro, Estado];
      con.query(query, values, (error, results) => {
        if (error) {
          console.error('Error al insertar datos:', error);
          reject('Error al insertar datos en la base de datos');
        } else {
          console.log('Datos insertados correctamente');
          resolve('Datos insertados correctamente');
        }
      });
    });
  }

  search(query) {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM compras WHERE id = '${query}'`, (error, results) => {
        if (error) {
          console.error('Error al ejecutar la consulta: ', error);
          reject(error);
        } else {
          console.log('Resultados de la consulta: ', results);
          resolve(results);
        }
      });
    });
  }

  update(query , data){
    return new Promise((resolve, reject) => {  
      const { id, Nombre, Apellido, Correo, Carro, Estado } = data;
      const sql = `UPDATE compras SET Nombre = '${Nombre}', Apellido = '${Apellido}', Correo = '${Correo}', Carro = '${Carro}', Estado = '${Estado}' WHERE id = ${query}`;
      con.query(sql, (error, result) => {
        if(error){
          console.log('Hubo un error y no se pudo actualizar los datos')
          reject(error);
        }else{
          console.log('Datos actualizados exitosamente');
          resolve(result);
        }
      })
    }) 
  }

  delete(query) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM compras WHERE id = ${query}`;
      con.query(sql, (error, result) => {
        if (error) {
          console.log('Hubo un error y no se pudo eliminar los datos');
          reject(error);
        } else {
          console.log('Datos borrados exitosamente');
          resolve(result);
        }
      });
    });
  }
} 

const comprasController = new ComprasController();
export default comprasController;
