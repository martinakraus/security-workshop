import crypto from 'crypto';

const password = 'superSecurePassword';
const salt = 'salty'

const hashValue = crypto.scryptSync(password, salt, 64);
console.log(hashValue.toString('hex')); // '3745e48...08d59ae'

const hashValue2 = crypto.scryptSync(password, salt, 64, { N: 1024 });
console.log(hashValue2.toString('hex')); // '3745e48...08d59ae'
