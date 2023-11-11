import type { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js'
export type inputVerificationCode_fn_T = (data:any)=>void
export declare type inputVerificationCode_function_type = inputVerificationCode_fn_T
export interface session_user_ctx_T {
	user:CognitoUser;
	session:CognitoUserSession;
}
