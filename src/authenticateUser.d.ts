import type { session_user_ctx_T } from './session_user_ctx_T';
export declare function authenticateUser(Username: string, Password: string): Promise<session_user_ctx_T>;
