import { promisify } from 'util'
/**
 * @param user{module:amazon-cognito-identity-js.CognitoUser}
 * @param attribute_a{module:amazon-cognito-identity-js.ICognitoUserAttributeData[]}
 * @returns {Promise<string>}
 */
export async function updateAttributes(
	user, attribute_a
) {
	const updateAttributes_ = promisify(user.updateAttributes.bind(user))
	return await updateAttributes_(attribute_a)
}
