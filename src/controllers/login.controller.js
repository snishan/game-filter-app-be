

import pkg from 'lodash';
import Data from '../data/data.js';
import jwt from 'jsonwebtoken'
import { CheckPassword } from '../utils/helper.js';
import { secretKey } from '../utils/config.js';
const { isEmpty } = pkg;

export const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
       
        if (isEmpty(username) || isEmpty(password)) {
            return res.status(400).json({
                status: 'fail',
                message: 'Data can not be empty'
            });
        }

        let user = null;
        for (const u of Data.users) {
            if (u.username === username) {
                const isPasswordValid = await CheckPassword(password, u.password);
                if (isPasswordValid) {
                    user = u;
                    break;
                }
            }
        }

        if (user==null) {
            return res.status(401).json({
                status: 'fail',
                message: 'Invalid credentials'
            });
        }

       
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey);
        return res.status(200).json({
            status: 'success',
            data: {username:user.username,token:token},
        });
       
       
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }
}   


export const Logout=(req,res)=>{
    try {
        return res.status(200).json({
            status: 'success',
            data: 'Logout success',
        });
       
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }
}