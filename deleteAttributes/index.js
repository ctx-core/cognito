import { promisify } from 'util'
/**
 * @param {module:amazon-cognito-identity-js.CognitoUser}user
 * @param {string[]}attribute_a
 * @returns {Promise<string>}
 */
export async function deleteAttributes(
	user,
	attribute_a
) {
	const deleteAttributes_ = promisify(user.deleteAttributes.bind(user))
	return await deleteAttributes_(attribute_a)
}
