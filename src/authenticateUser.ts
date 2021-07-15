import { AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js'
import type { session_user_ctx_T } from './session_user_ctx_T.js'
import { cognito_user_ } from './cognito_user_.js'
export async function authenticateUser(Username:string, Password:string):Promise<session_user_ctx_T> {
	const AuthenticationDetails_i = new AuthenticationDetails({
		Username,
		Password,
	})
	const user = cognito_user_(Username)
	return new Promise((resolve, reject)=>{
		user.authenticateUser(AuthenticationDetails_i, {
			onSuccess(session:CognitoUserSession) {
				resolve({ session, user })
			},
			onFailure(err) {
				reject(err.message || JSON.stringify(err))
			},
		})
	})
}
