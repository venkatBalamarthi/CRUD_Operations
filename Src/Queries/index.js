export const SQL_QURIES = {
  USERS: {
    CREATE_TABLE: `
    CREATE TABLE IF  NOT EXISTS users (id INT NOT NULL AUTO_INCREMENT ,
      first_name VARCHAR(20) NOT NULL,
      middle_name VARCHAR(20) DEFAULT NULL,
      last_name VARCHAR(20) NOT NULL,
      dob BIGINT(20) DEFAULT 0,
      email VARCHAR(30) NOT NULL,
      phone_number VARCHAR(30) NOT NULL,
      occupation VARCHAR(30) DEFAULT NULL,
      company VARCHAR(20) DEFAULT NULL,
      password VARCHAR(20) DEFAULT NULL,
      createdAt BIGINT(20) DEFAULT 0,
      updatedAt BIGINT(20) DEFAULT 0,
      isDeleted TINYINT(2) DEFAULT 0,
      primary key(id,email,phone_number))`,
    INSERT_USER:
      "INSERT INTO users(first_name,middle_name,last_name,dob,email,phone_number,occupation,company,password,createdAt,updatedAt,isDeleted)VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
    FINS_USER: (isLogin = false) =>
      isLogin
        ? "SELECT * FROM users WHERE email = ? AND password = ?"
        : "SELECT * FROM users WHERE email = ?",
    GET_USER: (userId) => `SELECT * FROM users WHERE id = ${userId}`,
    DELETE: (userId) => `DELETE  FROM users WHERE id = ${userId}`,
  },
};
