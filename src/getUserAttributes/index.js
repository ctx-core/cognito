/**
 * @param {module:amazon-cognito-identity-js.CognitoUser}user
 * @returns {Promise<module:amazon-cognito-identity-js.CognitoUserAttribute[]>}
 */
export async function index(user) {
	return new Promise((resolve, reject)=>{
		user.getUserAttributes((
			err,
			result
		)=>{
			if (err) {
				reject(err)
				return
			}
			resolve(result)
		})
	})
}
