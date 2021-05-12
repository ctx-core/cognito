import { CognitoUserPool, ICognitoUserPoolData } from 'amazon-cognito-identity-js'
export const Pool = new CognitoUserPool(_pool_data())
export function _pool_data() {
	return {
		UserPoolId: process.env.COGNITO_USER_POOL_ID,
		ClientId: process.env.COGNITO_APP_CLIENT_ID,
	} as ICognitoUserPoolData
}
export const _data__pool = _pool_data