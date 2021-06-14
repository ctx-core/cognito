import type { CognitoUser } from 'amazon-cognito-identity-js';
export declare function forgotPassword(user: CognitoUser, inputVerificationCode: (data: any) => void): Promise<unknown>;
