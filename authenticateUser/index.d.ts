import type { session_user_ctx_T } from '../_types/index.js'
export declare function authenticateUser(
	Username:string,
	Password:string
):Promise<session_user_ctx_T>
