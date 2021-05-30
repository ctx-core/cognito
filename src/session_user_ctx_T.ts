import type { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js'
export interface session_user_ctx_T {
	user:CognitoUser
	session:CognitoUserSession
}
