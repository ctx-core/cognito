import type { CognitoUser } from 'amazon-cognito-identity-js';
export declare function deleteAttributes(user: CognitoUser, attribute_a1: string[]): Promise<string | undefined>;