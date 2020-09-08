import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { promisify } from 'util'
export async function getUserAttributes(user:CognitoUser):Promise<CognitoUserAttribute[]> {
	return promisify(user.getUserAttributes.bind(user))()
}
