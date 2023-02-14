/**
 * @param user{module:amazon-cognito-identity-js.CognitoUser}
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
