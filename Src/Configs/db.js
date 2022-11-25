import mysql from "mysql";

const dbConfig = {
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "interview",
};

export const pool = mysql.createPool(dbConfig);
console.log("----- db config-----", dbConfig);
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Databse connection was closed");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
    if (connection) {
      console.log("-----connection----", connection);
      connection.release();
    }
    return;
  } else {
    console.log("connection established");
  }
});
