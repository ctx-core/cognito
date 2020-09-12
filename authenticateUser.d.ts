import type { session_user_ctx_type } from './session_user_ctx_type';
export declare function authenticateUser(Username: string, Password: string): Promise<session_user_ctx_type>;
