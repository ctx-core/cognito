import { _cognito_user } from './_cognito_user'
export async function confirmRegistration(Username:string, code:string) {
	const user = _cognito_user(Username)
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
