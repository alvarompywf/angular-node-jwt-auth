import { connection } from '../database/bd';
import jwt from 'jsonwebtoken';
import {
  insertionUserDataQuery,
  loginQuery,
  registerQuery,
  usersQuery,
} from './auth.queries';

export function createToken(user) {
  console.log('user', user);
  const payload = {
    user_id: user.userId,
    user_name: user.name,
  };

  return jwt.sign(payload, process.env.jwt_key);
}

export function loginHandler(req, res) {
  try {
    const sql = loginQuery(req.body.email, req.body.password);
    connection.query(sql, function (err, results) {
      try {
        const user = results[0];
        if (user && user.userId) {
          res.status(200).send({ success: true, token: createToken(user) });
        } else {
          res.status(409).send({ code: 'LOGIN_ERROR' });
        }
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.error('login error--> ', err);
    res.status(500).send({ success: true });
  }
}

export function registerHandler(req, res) {
  try {
    const sql = registerQuery(req.body);
    connection.query(sql, function (err, result) {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      console.log(
        'insertionUserDataQuery(req.body)',
        insertionUserDataQuery(req.body)
      );
      connection.query(
        insertionUserDataQuery(req.body),
        function (err, result) {
          console.log('result[0]', result);
          res
            .status(200)
            .send({ token: createToken(result[0]) })
            .end();
        }
      );

      return;
    });
  } catch (err) {
    res.status(500);
    return;
  }
}

export function usersHandler(req, res) {
  try {
    const sql = usersQuery(req.body);
    connection.query(sql, function (err, results) {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.status(200).send(results);
    });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
}
