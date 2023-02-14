import { cognito_user_ } from '../cognito_user_/index.js'
/**
 * @param Username{string}
 * @param code{string}
 * @returns {Promise<any>}
 */
export async function confirmRegistration(Username, code) {
	const user = cognito_user_(Username)
	return new Promise((resolve, reject)=>{
		user.confirmRegistration(code, true, (err, result)=>{
			if (err) {
				reject(err)
				return
			}
			resolve(result)
		})
	})
}
