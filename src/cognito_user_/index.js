import { CognitoUser } from 'amazon-cognito-identity-js'
import { Pool } from '../Pool.js'
/**
 * @param Username{string}
 * @returns {module:amazon-cognito-identity-js.CognitoUser}
 * @private
 */
export function cognito_user_(Username) {
	return new CognitoUser(UserData_(Username))
}
function UserData_(Username) {
	return { Username, Pool }
}
