/// <reference types=".pnpm/amazon-cognito-identity-js@4.5.7/node_modules/amazon-cognito-identity-js" />
import type { CognitoUserAttribute } from 'amazon-cognito-identity-js';
export declare function signUp(username: string, password: string, attributes_a1: CognitoUserAttribute[], validation_data: CognitoUserAttribute[]): Promise<import("amazon-cognito-identity-js").ISignUpResult | undefined>;
