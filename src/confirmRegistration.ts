import { cognito_user_ } from './cognito_user_.js'
export async function confirmRegistration(Username:string, code:string):Promise<any> {
	const user = cognito_user_(Username)
	return new Promise((resolve, reject) => {
		user.confirmRegistration(code, true, (err, result) => {
			if (err) {
				reject(err)
				return
			}
			resolve(result)
		})
	})
}
