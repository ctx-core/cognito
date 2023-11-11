import { promisify } from 'util'
/**
 * @param {module:amazon-cognito-identity-js.CognitoUser}user
 * @returns {Promise<string>}
 */
export async function deleteUser(user) {
	const deleteUser_ = promisify(user.deleteUser.bind(user))
	return await deleteUser_()
}
