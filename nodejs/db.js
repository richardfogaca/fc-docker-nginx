const mysql = require("mysql2");

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

exports.connectToDb = () => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config);
    connection.connect((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};

exports.createTable = (connection) => {
  const createTableSql = `CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
  )`;
  return new Promise((resolve, reject) => {
    connection.query(createTableSql, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};

exports.insertData = (connection) => {
  const insertDataSql = `INSERT INTO users (name) VALUES ?`;
  const data = [["John"], ["Mike"], ["Amy"]];
  return new Promise((resolve, reject) => {
    connection.query(insertDataSql, [data], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};

exports.selectData = (connection) => {
  const selectSql = "SELECT * FROM users";
  return new Promise((resolve, reject) => {
    connection.query(selectSql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports.closeConnection = (connection) => {
  return new Promise((resolve, reject) => {
    connection.end((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};
