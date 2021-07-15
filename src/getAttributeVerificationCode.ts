import type { CognitoUser } from 'amazon-cognito-identity-js'
import type { inputVerificationCode_function_type } from './inputVerificationCode_function_type.js'
export async function getAttributeVerificationCode(
	user:CognitoUser, inputVerificationCode:inputVerificationCode_function_type
):Promise<null> {
	return new Promise((resolve, reject)=>{
		user.getAttributeVerificationCode('email', {
			onSuccess() {
				resolve(null)
			},
			onFailure(err) {
				reject(err.message || JSON.stringify(err))
			},
			inputVerificationCode,
		})
	})
}
