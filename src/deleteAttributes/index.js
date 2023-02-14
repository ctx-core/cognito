import { promisify } from 'util'
/**
 * @param user{module:amazon-cognito-identity-js.CognitoUser}
 * @param attribute_a{string[]}
 * @returns {Promise<string>}
 */
export async function deleteAttributes(user, attribute_a) {
	const deleteAttributes_ = promisify(user.deleteAttributes.bind(user))
	return await deleteAttributes_(attribute_a)
}
