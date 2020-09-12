import type { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
export declare type session_user_ctx_type = {
    user: CognitoUser;
    session: CognitoUserSession;
};
export declare type ctx__user__session = session_user_ctx_type;
