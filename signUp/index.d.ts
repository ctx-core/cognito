import type { CognitoUserAttribute, ISignUpResult } from 'amazon-cognito-identity-js'
export declare function signUp(
	username:string,
	password:string,
	attributes_a:CognitoUserAttribute[],
	validation_data:CognitoUserAttribute[],
):Promise<ISignUpResult>
