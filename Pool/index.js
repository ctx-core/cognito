import { import_meta_env_ } from '@ctx-core/env'
import { CognitoUserPool } from 'amazon-cognito-identity-js'
export const Pool = new CognitoUserPool(pool_data_())
/**
 * @returns {{UserPoolId: string, ClientId: string}}
 */
export function pool_data_() {
	return {
		UserPoolId: import_meta_env_().COGNITO_USER_POOL_ID,
		ClientId: import_meta_env_().COGNITO_APP_CLIENT_ID
	}
}
export {
	pool_data_ as _pool_data,
	pool_data_ as _data__pool,
}
