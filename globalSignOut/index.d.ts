import type { CognitoUser } from 'amazon-cognito-identity-js'
export declare function globalSignOut(
	user:CognitoUser
):Promise<string>
