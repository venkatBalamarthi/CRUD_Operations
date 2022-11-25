import { pool } from "../Configs/db.js";

export const sucessCallback = (res) => {
  const result = {
    isError: false,
    statusCode: 200,
    result: res,
  };
  return result;
};

export const errorCallback = (err) => {
  const error = {
    isError: true,
    statusCode: 401,
    error: err,
  };
  return error;
};

export const executeQuery = (query = "", params = []) => {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (error, result) => {
      if (result) {
        resolve(sucessCallback(result));
      } else {
        reject(errorCallback(error));
      }
    });
  });
};

export const verifyEmail = (email) => {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (typeof email === "string" && regEx.test(email?.trim())) {
    return true;
  }

  return false;
};
