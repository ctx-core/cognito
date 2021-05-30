import type { CognitoUser } from 'amazon-cognito-identity-js'
import { promisify } from 'util'
export async function deleteAttributes(user:CognitoUser, attribute_a1:string[]) {
	const deleteAttributes_ = promisify(user.deleteAttributes.bind(user))
	return await deleteAttributes_(attribute_a1)
}
