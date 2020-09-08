import { promisify } from 'util'
import { _cognito_user } from './_cognito_user'
export async function confirmRegistration(Username:string, code:string) {
	const user = _cognito_user(Username)
	const _promise__confirmRegistration =
		promisify(user.confirmRegistration.bind(user))
	return await _promise__confirmRegistration(code, true)
}
