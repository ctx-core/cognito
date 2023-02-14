/**
 * @param user{module:amazon-cognito-identity-js.CognitoUser}
 * @returns {Promise<void>}
 */
export async function signOut(user) {
	return user.signOut()
}
