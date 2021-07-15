import type { CognitoUser } from 'amazon-cognito-identity-js'
export async function forgotPassword(
	user:CognitoUser, inputVerificationCode:(data:any)=>void
):Promise<any> {
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
