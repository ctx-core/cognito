import { CognitoUser } from 'amazon-cognito-identity-js';
import { Pool } from './Pool';
export function cognito_user_(Username) {
    return new CognitoUser(UserData_(Username));
}
function UserData_(Username) {
    return {
        Username,
        Pool,
    };
}
//# sourceMappingURL=src/cognito_user_.js.map