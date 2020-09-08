import { CognitoUser } from 'amazon-cognito-identity-js'
export async function signOut(user:CognitoUser) {
	return user.signOut()
}
