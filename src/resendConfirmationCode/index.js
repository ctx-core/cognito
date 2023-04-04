import { cognito_user_ } from '../cognito_user_/index.js'
/**
 * @param {string}Username
 * @param {module:amazon-cognito-identity-js.ClientMetadata}clientMetaData
 * @returns {Promise<any>}
 */
export async function resendConfirmationCode(
	Username,
	clientMetaData
) {
	const user = cognito_user_(Username)
	return new Promise((resolve, reject)=>{
		user.resendConfirmationCode((err, result)=>{
			if (err) {
				reject(err)
				return
			}
			resolve(result)
		}, clientMetaData)
	})
}
