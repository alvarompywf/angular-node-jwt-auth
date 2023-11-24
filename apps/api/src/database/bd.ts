import mysql from 'mysql2';

export const connection = mysql.createConnection({
  host: process.env.HOST_DB,
  port: Number(process.env.PORT_DB),
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
  ssl: {},
});
