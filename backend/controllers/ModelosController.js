import con from "../database/db.js";


class ModelosController {

  todos() {
    return new Promise((resolve, reject) => {
      con.query("SELECT * FROM modelos", function (error, results, fields) {
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
      const { id, Modelo, Precio, Fecha } = infodb;
  
      const query = 'INSERT INTO modelos (id, Modelo, Precio, Fecha) VALUES (?, ?, ?, ?)';
      const values = [id, Modelo, Precio, Fecha];
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
      con.query(`SELECT * FROM modelos WHERE id = '${query}'`, (error, results) => {
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
      const { id, Modelo, Precio, Fecha } = data;
      const sql = `UPDATE modelos SET Modelo = '${Modelo}', Precio = '${Precio}', Fecha = '${Fecha}' WHERE id = ${query}`;
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
      const sql = `DELETE FROM modelos WHERE id = ${query}`;
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

const modelosController = new ModelosController();
export default modelosController;