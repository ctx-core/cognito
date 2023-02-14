/**
 * @param user{module:amazon-cognito-identity-js.CognitoUser}
 * @param inputVerificationCode{(data:any)=>void}
 * @returns {Promise<any>}
 */
export async function forgotPassword(user, inputVerificationCode) {
	return new Promise((resolve, reject)=>{
		user.forgotPassword({
			onSuccess(data) {
				resolve(data)
			},
			onFailure(err) {
				reject(err.message || JSON.stringify(err))
			},
			inputVerificationCode
		})
	})
}
