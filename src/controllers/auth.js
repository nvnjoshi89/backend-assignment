import createError from 'http-errors';

import db from '@/database';
import jwt from 'jsonwebtoken';
import { Sequelize } from 'sequelize';

/**
 * POST /auth/login
 * Login request
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user by email address
    const user = await db.models.user.scope('withPassword').findOne({ where: { email } });
    
    if (!user) {
      return next(createError(400, 'No user was found with this email!'));
    }

  
    // When you query the database and retrieve a user instance, such as in const user = await db.models.user.scope('withPassword').findOne({ where: { email } });, the retrieved user object will have access to all the instance methods defined within the User class, including validatePassword().
    // Check user password
    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
      return next(createError(400, 'Incorrect password!'));
    }

    //  Checking user status
    const userStatus = user.status;
    if (!userStatus) {
      return next(createError(401, 'User Inactive'));
    }

    const userData = await db.models.user.findOne({
      where: { id: user.id },
    });
 


   
    // Generate and return token
      const token = user.generateToken();
      const refreshToken = user.generateToken('8h');

    // saving refresh Token with the current user
    user.refresh_token = refreshToken;
    user.last_logged_in = Date.now();
    const result = await user.save();

  

    return res.status(200).json({
      fullName: user.full_name,
      email: user.email,
      accessToken: token,
    });
  } catch (err) {
    return next(err);
  }
};

// Generate new access token on the basis of the refresh token provided from the browser cookie
export const handleRefreshToken = async (req, res) => {
  
  const foundUser = await db.models.user.findOne({ where: { refresh_token: refreshToken } });
 
  if (!foundUser) return res.sendStatus(403); //Forbidden

 
  const userData = await db.models.user.findOne({
    where: { id: foundUser.id },
   
  });
  

  

  // Verify the refresh token using the JWT_SECRET_KEY from the environment variables and the jwt.verify method.
// If there is an error during verification or the token is invalid, the callback function will receive an 'err' argument.
// If the token is valid, the decoded token data will be passed to the callback function as the 'decoded' argument.
  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, (err, decoded) => {

      // check for errors during verification or if the user ID in the decoded JWT payload does not match the user's ID
    if (err || foundUser.id !== decoded.id) return res.sendStatus(403);
    // const roles = Object.values(foundUser.roles);

      // extract the user's email from the foundUser object
    const email = foundUser.dataValues.email;

      // generate a new JWT access token with the user ID and email as the payload and a 10 hour expiration time
    const accessToken = jwt.sign(
      {
        id: decoded.id,
        email: decoded.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '10h' }
    );
    res.json({
   
      fullName: foundUser.full_name,
      email: email,
      accessToken: accessToken,
    });
  });
};

/**
 * GET /auth/me
 * Get current user
 */
export const getCurrentUser = async (req, res, next) => {
  try {
    delete req.user.dataValues.password;
    res.json(req.user);
  } catch (err) {
    next(err);
  }
};

/**
 * PUT /auth/me/password
 * Update password of current user
 */
export const updatePassword = async (req, res, next) => {
  try {
    const { current, password } = req.body;

    // Check user password
    const isValidPassword = await req.user.validatePassword(current);
    if (!isValidPassword) {
      return next(createError(400, 'Incorrect password!'));
    }

    // Update password
    req.user.password = password;
    await req.user.save();

    return res.json({ success: true });
  } catch (err) {
    return next(err);
  }
};
