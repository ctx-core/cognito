import type { CognitoUser, ICognitoUserAttributeData } from 'amazon-cognito-identity-js'
import { promisify } from 'util'
export async function updateAttributes(
	user:CognitoUser, attribute_a:ICognitoUserAttributeData[]
):Promise<string|undefined> {
	const updateAttributes_ = promisify(user.updateAttributes.bind(user))
	return await updateAttributes_(attribute_a)
}
