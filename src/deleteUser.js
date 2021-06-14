import { promisify } from 'util';
export async function deleteUser(user) {
    const deleteUser_ = promisify(user.deleteUser.bind(user));
    return await deleteUser_();
}
//# sourceMappingURL=src/deleteUser.js.map