import { promisify } from 'util'
import { Pool } from './Pool'
const _signUp_promise = promisify(Pool.signUp.bind(Pool))
export async function signUp(username, password, a1__attribute, data__validation = null) {
	return await _signUp_promise(
		username,
		password,
		a1__attribute,
		data__validation,
	)
}
