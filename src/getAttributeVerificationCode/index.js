/**
 * @param user{module:amazon-cognito-identity-js.CognitoUser}
 * @param inputVerificationCode{import('../_types').inputVerificationCode_fn_T}
 * @returns {Promise<null>}
 */
export async function getAttributeVerificationCode(
	user, inputVerificationCode
) {
	return new Promise((resolve, reject)=>{
		user.getAttributeVerificationCode('email', {
			onSuccess() {
				resolve(null)
			},
			onFailure(err) {
				reject(err.message || JSON.stringify(err))
			},
			inputVerificationCode
		})
	})
}
