import { promisify } from 'util';
import { Pool } from './Pool';
const signUp_ = promisify(Pool.signUp.bind(Pool));
export async function signUp(username, password, attributes_a, validation_data) {
    return await signUp_(username, password, attributes_a, validation_data);
}
//# sourceMappingURL=src/signUp.js.map