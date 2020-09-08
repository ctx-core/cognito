import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js'
export type session_user_ctx_type = {
	user:CognitoUser
	session:CognitoUserSession
}
export type ctx__user__session = session_user_ctx_type
