import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import { cognito_user_ } from './cognito_user_';
export async function authenticateUser(Username, Password) {
    const AuthenticationDetails_i = new AuthenticationDetails({
        Username,
        Password,
    });
    const user = cognito_user_(Username);
    return new Promise((resolve, reject) => {
        user.authenticateUser(AuthenticationDetails_i, {
            onSuccess(session) {
                resolve({ session, user });
            },
            onFailure(err) {
                reject(err.message || JSON.stringify(err));
            },
        });
    });
}
//# sourceMappingURL=src/authenticateUser.js.map