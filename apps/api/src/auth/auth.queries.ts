import { connection } from '../database/bd';

export const loginQuery = (email, password) => {
  return `SELECT userId, name FROM users where email = ${connection.escape(
    email
  )} AND password = ${connection.escape(password)};`;
};

export const registerQuery = (body) => {
  return `INSERT INTO
    mena.users (surname, name, email, numberPhone, password) 
    VALUES
    (${connection.escape(body.surname)},
    ${connection.escape(body.name)},
    ${connection.escape(body.email)},
    ${connection.escape(body.numberPhone)},
    ${connection.escape(body.password)});
    `;
};

export const insertionUserDataQuery = (body) => {
  return `
  SELECT userId, name
        FROM mena.users U
        where
                U.name = ${connection.escape(body.name)} AND
                U.surname = ${connection.escape(body.surname)} AND
                U.email = ${connection.escape(body.email)} AND
                U.numberPhone = ${connection.escape(body.numberPhone)} AND
                U.password = ${connection.escape(body.password)};`;
};

export const usersQuery = (body) => {
  return `SELECT userId, name, surname, numberPhone FROM users;`;
};
