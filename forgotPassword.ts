import { CognitoUser } from 'amazon-cognito-identity-js'
import { inputVerificationCode_function_type } from './inputVerificationCode_function_type'
export async function forgotPassword(user:CognitoUser, inputVerificationCode?:inputVerificationCode_function_type) {
	return new Promise((resolve, reject)=>{
		user.forgotPassword({
			onSuccess(data) {
				resolve(data)
			},
			onFailure(err) {
				reject(err.message || JSON.stringify(err))
			},
			inputVerificationCode,
		})
	})
}
