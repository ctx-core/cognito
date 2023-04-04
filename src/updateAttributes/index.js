import { promisify } from 'util'
/**
 * @param {module:amazon-cognito-identity-js.CognitoUser}user
 * @param {module:amazon-cognito-identity-js.ICognitoUserAttributeData[]}attribute_a
 * @returns {Promise<string>}
 */
export async function updateAttributes(
	user,
	attribute_a
) {
	const updateAttributes_ = promisify(user.updateAttributes.bind(user))
	return await updateAttributes_(attribute_a)
}
