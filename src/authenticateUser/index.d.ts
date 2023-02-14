import type { session_user_ctx_T } from '../_types'
export declare function authenticateUser(
	Username:string, Password:string
):Promise<session_user_ctx_T>
