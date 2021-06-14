import type { CognitoUser } from 'amazon-cognito-identity-js';
export declare function deleteAttributes(user: CognitoUser, attribute_a: string[]): Promise<string | undefined>;
