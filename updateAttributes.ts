import type { CognitoUser, ICognitoUserAttributeData } from 'amazon-cognito-identity-js'
import { promisify } from 'util'
export async function updateAttributes(user:CognitoUser, attribute_a1:ICognitoUserAttributeData[]) {
	const _updateAttributes_promise = promisify(user.updateAttributes.bind(user))
	return await _updateAttributes_promise(attribute_a1)
}
