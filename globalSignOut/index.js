/**
 * @param {module:amazon-cognito-identity-js.CognitoUser}user
 * @returns {Promise<string>}
 */
export async function globalSignOut(user) {
	return new Promise((resolve, reject)=>{
		user.globalSignOut({
			onSuccess: resolve,
			onFailure: reject
		})
	})
}
