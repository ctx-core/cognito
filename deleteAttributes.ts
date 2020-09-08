import { CognitoUser } from 'amazon-cognito-identity-js'
import { promisify } from 'util'
export async function deleteAttributes(user:CognitoUser, attribute_a1:string[]) {
	const _deleteAttributes_promise = promisify(user.deleteAttributes.bind(user))
	return await _deleteAttributes_promise(attribute_a1)
}
