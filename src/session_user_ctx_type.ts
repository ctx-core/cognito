import type { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js'
export interface session_user_ctx_type {
	user:CognitoUser
	session:CognitoUserSession
}
export {
	session_user_ctx_type as ctx__user__session
}
