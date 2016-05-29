import jwt from 'jsonwebtoken';
import uuid from 'node-uuid';

export const generateToken = () => {
    return new Promise((resolve, reject) => {
    //    jwt.sign({foo: 'bar'}, 'Ilovescotchyscotch', {algorithm: 'RS256'}, (err, token) => {
    //       if (err) {
    //           console.log(err);
    //           reject(err);
    //       }
    //       resolve(token); 
    //    });
        resolve(uuid.v4());
    });
}

export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        resolve(true);
    })
}