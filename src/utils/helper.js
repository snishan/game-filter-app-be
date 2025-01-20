import bcrypt from 'bcrypt'

export const CheckPassword = async (requestPassword, actualPassword) => {
    try {
        const result = await bcrypt.compare(requestPassword, actualPassword);
        return result;
    } catch (err) {
        return err;
    }
}