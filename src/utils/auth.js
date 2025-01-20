import jwt from 'jsonwebtoken';
import Data from '../data/data.js';
import pkg from 'lodash';
import { secretKey } from './config.js';
const { isEmpty } = pkg;

const auth = async (req) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return false;
  } else {
    const decoded = await jwt.verify(token, secretKey);
    const isUserHave = Data.users.find((user) => user.id == decoded.id)
    if (!isEmpty(isUserHave)) {
      return true
    } else {
      return false
    }
  }
};

export default auth;
