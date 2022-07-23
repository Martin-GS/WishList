const jwt = require('jsonwebtoken');

module.exports = {

  validateToken: (req, res, next) => {

    const authorizationHeaader = req.headers.authorization;

    let result;

    if (authorizationHeaader) {

      const token = req.headers.authorization.split(' ')[1] // Bearer <token>

      const options = {
        expiresIn: '2d',
      };

      try {
        result = jwt.verify(token, process.env.JWT_SECRET, options);
        req.decoded = result;
        next();
      } catch (err) {
        throw new Error(err);
      }

    } else {
      result = {
        error: `Authentication error. Token required.`,
        status: 401
      };
      res.status(401).send(result);
    }

  },

  createToken: (user) => {
    const payload = { userId: user.id };
    const options = { expiresIn: '2d' };
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, options);
    return token;
  }

}