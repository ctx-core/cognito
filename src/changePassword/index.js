import { promisify } from 'util'
/**
 * @param user{module:amazon-cognito-identity-js.CognitoUser}
 * @param oldPassword{string}
 * @param newPassword{string}
 * @returns {Promise<"SUCCESS"|undefined>}
 */
export async function changePassword(user, oldPassword, newPassword) {
	const changePassword_ = promisify(user.changePassword.bind(user))
	return await changePassword_(oldPassword, newPassword)
}
