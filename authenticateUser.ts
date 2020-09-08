import { AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js'
import { session_user_ctx_type } from './session_user_ctx_type'
import { _cognito_user } from './_cognito_user'
export async function authenticateUser(Username:string, Password:string):Promise<session_user_ctx_type> {
	const AuthenticationDetails__ = new AuthenticationDetails({
		Username,
		Password,
	})
	const user = _cognito_user(Username)
	return new Promise((resolve, reject)=>{
		user.authenticateUser(AuthenticationDetails__, {
			onSuccess(session:CognitoUserSession) {
				resolve({ session, user })
			},
			onFailure(err) {
				reject(err.message || JSON.stringify(err))
			},
		})
	})
}
