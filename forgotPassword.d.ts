import { CognitoUser } from 'amazon-cognito-identity-js';
import { inputVerificationCode_function_type } from './inputVerificationCode_function_type';
export declare function forgotPassword(user: CognitoUser, inputVerificationCode?: inputVerificationCode_function_type): Promise<unknown>;
