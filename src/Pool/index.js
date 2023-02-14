import { CognitoUserPool } from 'amazon-cognito-identity-js'
export const Pool = new CognitoUserPool(pool_data_())
/**
 * @returns {{UserPoolId: string, ClientId: string}}
 */
export function pool_data_() {
	return {
		UserPoolId: process.env.COGNITO_USER_POOL_ID,
		ClientId: process.env.COGNITO_APP_CLIENT_ID
	}
}
export {
	pool_data_ as _pool_data,
	pool_data_ as _data__pool,
}
