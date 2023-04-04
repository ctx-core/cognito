/**
 * @param {module:amazon-cognito-identity-js.CognitoUser}user
 * @param {import('../_types').inputVerificationCode_fn_T}inputVerificationCode
 * @returns {Promise<null>}
 */
export async function getAttributeVerificationCode(
	user,
	inputVerificationCode
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
