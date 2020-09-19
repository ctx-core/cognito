import { _cognito_user } from './_cognito_user'
export async function resendConfirmationCode(Username:string) {
	const user = _cognito_user(Username)
	return new Promise((resolve, reject)=>{
		user.resendConfirmationCode((err, result)=>{
			if (err) {
				reject(err)
				return
			}
			resolve(result)
		})
	})
}
