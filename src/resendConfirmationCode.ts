import { cognito_user_ } from './cognito_user_.js'
export async function resendConfirmationCode(Username:string) {
	const user = cognito_user_(Username)
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
