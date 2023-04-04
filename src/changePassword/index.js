import { promisify } from 'util'
/**
 * @param {module:amazon-cognito-identity-js.CognitoUser}user
 * @param {string}oldPassword
 * @param {string}newPassword
 * @returns {Promise<"SUCCESS"|undefined>}
 */
export async function changePassword(
	user,
	oldPassword,
	newPassword
) {
	const changePassword_ = promisify(user.changePassword.bind(user))
	return await changePassword_(oldPassword, newPassword)
}
