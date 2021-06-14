import { promisify } from 'util';
export async function updateAttributes(user, attribute_a) {
    const updateAttributes_ = promisify(user.updateAttributes.bind(user));
    return await updateAttributes_(attribute_a);
}
//# sourceMappingURL=src/updateAttributes.js.map