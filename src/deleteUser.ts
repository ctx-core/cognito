import type { CognitoUser } from 'amazon-cognito-identity-js'
import { promisify } from 'util'
export async function deleteUser(user:CognitoUser):Promise<string|undefined> {
	const deleteUser_ = promisify(user.deleteUser.bind(user))
	return await deleteUser_()
}
