import { promisify } from 'util';
export async function changePassword(user, oldPassword, newPassword) {
    const changePassword_ = promisify(user.changePassword.bind(user));
    return await changePassword_(oldPassword, newPassword);
}
//# sourceMappingURL=src/changePassword.js.map