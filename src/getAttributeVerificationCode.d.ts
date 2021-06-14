import type { CognitoUser } from 'amazon-cognito-identity-js';
import type { inputVerificationCode_function_type } from './inputVerificationCode_function_type';
export declare function getAttributeVerificationCode(user: CognitoUser, inputVerificationCode: inputVerificationCode_function_type): Promise<unknown>;
