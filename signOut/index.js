/**
 * @param {module:amazon-cognito-identity-js.CognitoUser}user
 * @returns {Promise<void>}
 */
export async function signOut(user) {
	return user.signOut()
}
