import { CognitoUser } from 'amazon-cognito-identity-js';
export declare function changePassword(user: CognitoUser, oldPassword: string, newPassword: string): Promise<any>;
