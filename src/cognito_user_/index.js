import { CognitoUser } from 'amazon-cognito-identity-js'
import { Pool } from '../Pool/index.js'
/**
 * @param {string}Username
 * @returns {module:amazon-cognito-identity-js.CognitoUser}
 * @private
 */
export function cognito_user_(Username) {
	return new CognitoUser(UserData_(Username))
}
function UserData_(Username) {
	return { Username, Pool }
}
