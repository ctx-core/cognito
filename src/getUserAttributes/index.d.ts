import type { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js'
export declare function getUserAttributes(
	user:CognitoUser
):Promise<CognitoUserAttribute[]>
