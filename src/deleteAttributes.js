import { promisify } from 'util';
export async function deleteAttributes(user, attribute_a) {
    const deleteAttributes_ = promisify(user.deleteAttributes.bind(user));
    return await deleteAttributes_(attribute_a);
}
//# sourceMappingURL=src/deleteAttributes.js.map