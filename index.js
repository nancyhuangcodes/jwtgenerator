// How to: https://www.npmjs.com/package/jsonwebtoken
// Addtional reference: https://codedamn.com/news/nodejs/use-json-web-token-jwt-in-nodejs#handling_token_expiration

// perform npm install jsonwebtoken, OR
// perform npm install jasonwebtoken --save-dev (to keep the dependency as a developer dependency)

import jwt from "jsonwebtoken";

// Generate a new token
function generateToken(user) { 
    
    const payload = {                                   // Create the payload to be signed,
        username: user.username,                        // using the passed-in parameter's user.username                        
        email: user.email,                              // using the passed-in parameter's user.email
        role: user.role,                                // TODO: pass in the role as part of the user payload
    };
    
    const secret = "your-refresh-token-secret";         // Secret key to encode the token (sample only, never use a weak secret token) 
    const options = { expiresIn: "365d" };              // Token expires in 1 year from the date of generation
  
    return jwt.sign(payload, secret, options);          // Sign the token with the payload, secret and options (expiry: 1 year)

}

const user = {
    username: "momorunner",                             // username created as part of the user token
    email: "martin@example.com",                        // email created as part of the user token
    role: "ADMIN"                                       // TODO: generate a role "ADMIN" for the user token 
};

const newAccessToken = generateToken(user);             // invoke generateToken to create a new token to use
console.log(newAccessToken);