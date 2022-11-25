import {
  errorCallback,
  executeQuery,
  sucessCallback,
  verifyEmail,
} from "../Helpers/index.js";
import { createJWTToken } from "../Middlewares/index.js";
import { SQL_QURIES } from "../Queries/index.js";

export const addUser = (req) => {
  const errorObject = {};
  return new Promise(async (resolve, reject) => {
    const {
      first_name,
      middle_name,
      last_name,
      dob,
      email = "",
      phone_number,
      occupation,
      company,
      password = "",
      createdAt = new Date().getTime(),
      updatedAt = new Date().getTime(),
      isDeleted = false,
    } = req.body;
    if (!first_name) {
      errorObject["first_name"] = "First name field is missing.";
    }
    if (!last_name) {
      errorObject["last_name"] = "last name field is missing.";
    }
    if (!email) {
      errorObject["email"] = "email field is missing";
    }
    if (!phone_number) {
      errorObject["phone_number"] = "phone_number field is missing";
    }

    if (!password) {
      errorObject["password"] = "password field missing";
    }

    if (Object.keys(errorObject).length) {
      const values = Object.values(errorObject);
      reject(errorCallback(values));
      return;
    }
    if (!verifyEmail(email)) {
      reject(
        errorCallback({
          email: "Invalid email format",
        })
      );
      return;
    }

    try {
      await executeQuery(SQL_QURIES.USERS.CREATE_TABLE);
    } catch (err) {
      console.log("----Error while creating table---", err);
      reject(errorCallback(err));
    }

    const isAlreadyUser = await executeQuery(
      SQL_QURIES.USERS.FINS_USER(false),
      [email, phone_number]
    );
    const error = {
      isError: true,
    };
    if (isAlreadyUser?.result?.length) {
      let msg = "";
      const existingUser = isAlreadyUser?.result[0];
      if (existingUser?.phone_number === phone_number) {
        msg = "phone_number=" + phone_number;
      }
      if (existingUser?.email === email) {
        msg = Boolean(msg) ? `${msg} and  email=${email}` : "email=" + email;
      }
      const error = {
        message: `User already exists with ${msg} address`,
      };

      if (msg) {
        reject(errorCallback(error));
      }
    } else {
      const params = [
        first_name,
        middle_name,
        last_name,
        dob,
        email,
        phone_number,
        occupation,
        company,
        password,
        createdAt,
        updatedAt,
        isDeleted,
      ];
      executeQuery(SQL_QURIES.USERS.INSERT_USER, params)
        .then(async (res) => {
          if (res?.result) {
            let payload = {
              id: res?.result.insertId,
              email: email,
              password: password,
            };
            const token = await createJWTToken(payload);
            let result = {};
            (result.token = token),
              (result.email = email),
              (result.password = password);
            result.id = res?.result.insertId;
            resolve(sucessCallback(result));
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export const login = async (req) => {
  const { email, password } = req.body;
  return new Promise((resolve, reject) => {
    executeQuery(SQL_QURIES.USERS.FINS_USER(true), [email, password])
      .then(async (res) => {
        if (res?.result?.length) {
          let payload = {
            id: res?.result[0]?.id,
            email: res?.result[0]?.email,
          };
          const token = await createJWTToken(payload);
          let result = {};
          result = res?.result[0];
          result.token = token;
          resolve({
            isError: false,
            statusCode: 200,
            result: result,
          });
          return;
        } else {
          resolve({
            isError: true,
            statusCode: 404,
            message: "User does not exists",
          });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateUser = async (req) => {
  return new Promise(async (resolve, reject) => {
    const data = req.body;
    const userId = req.headers.userData.id;
    let SQL = "UPDATE users SET ";
    let comma = false;
    let params = [];
    if (data.first_name) {
      SQL += (comma ? "," : "") + "first_name = ? ";
      params.push(data.first_name);
      comma = true;
    }
    if (data.middle_name) {
      SQL += (comma ? "," : "") + "middle_name = ? ";
      params.push(data.middle_name);
      comma = true;
    }
    if (data.last_name) {
      SQL += (comma ? "," : "") + "last_name = ? ";
      params.push(data.last_name);
      comma = true;
    }
    if (data.password) {
      SQL += (comma ? "," : "") + "password = ? ";
      params.push(data.password);
      comma = true;
    }
    if (data.dob) {
      SQL += (comma ? "," : "") + "dob = ? ";
      params.push(data.dob);
      comma = true;
    }
    if (data.email) {
      SQL += (comma ? "," : "") + "email = ? ";
      params.push(data.email);
      comma = true;
    }
    if (data.password) {
      SQL += (comma ? "," : "") + "password = ? ";
      params.push(data.password);
      comma = true;
    }
    if (data.occupation) {
      SQL += (comma ? "," : "") + "occupation = ? ";
      params.push(data.occupation);
      comma = true;
    }
    if (data.company) {
      SQL += (comma ? "," : "") + "company = ? ";
      params.push(data.company);
      comma = true;
    }
    if (data.isDeleted !== undefined) {
      SQL += (comma ? "," : "") + "isDeleted = ? ";
      params.push(data.isDeleted);
      comma = true;
    }
    if (data.phone_number) {
      SQL += (comma ? "," : "") + "phone_number = ? ";
      params.push(data.phone_number);
      comma = true;
    }
    SQL += `,updatedAt = ${new Date().getTime()} WHERE  id = '${userId}'`;
    executeQuery(SQL, params)
      .then(async (res) => {
        try {
          const user = await getUser(req);
          if (!user?.isError) {
            resolve(user?.result);
          } else {
            reject(user);
          }
        } catch (err) {
          reject(err);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getUser = (req) => {
  const id = req.headers.userData.id;
  return new Promise((resolve, reject) => {
    executeQuery(SQL_QURIES.USERS.GET_USER(id), [])
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//We will not perform perminent delete operation  in real time , instead of  we will use only soft using update api to update isDeleted as true
export const deleteUser = (req) => {
  const id = req.headers.userData.id;
  return new Promise((resolve, reject) => {
    executeQuery(SQL_QURIES.USERS.DELETE(id), [])
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
