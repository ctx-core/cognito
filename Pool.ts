import { CognitoUserPool } from 'amazon-cognito-identity-js'
export const Pool = new CognitoUserPool(_data__pool())
export function _data__pool() {
	return {
		UserPoolId: process.env.COGNITO_USER_POOL_ID,
		ClientId: process.env.COGNITO_APP_CLIENT_ID,
	}
}

