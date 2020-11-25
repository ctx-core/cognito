import type { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js'
export interface session_user_ctx_type {
	user:CognitoUser
	session:CognitoUserSession
}
export type ctx__user__session = session_user_ctx_type
