import { promisify } from 'util'
import { _cognito_user } from './_cognito_user'
export async function resendConfirmationCode(Username:string) {
	const user = _cognito_user(Username)
	const _promise__resendConfirmationCode = promisify(user.resendConfirmationCode.bind(user))
	return await _promise__resendConfirmationCode()
}
