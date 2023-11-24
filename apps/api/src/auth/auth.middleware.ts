import jwt from 'jsonwebtoken';
export const checktoken = (req, res, next) => {
  console.log('req.header', req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(500).json({ error: 'jwt error' });
  }

  const token = req.headers.authorization;

  let payload;

  try {
    payload = jwt.verify(token, process.env.jwt_key);
    // console.log('payload', payload);
  } catch (error) {
    return res.status(500).json({ error: 'jwt error' });
  }

  next();
};

module.exports = { checktoken };
