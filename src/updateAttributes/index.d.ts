import type { CognitoUser, ICognitoUserAttributeData } from 'amazon-cognito-identity-js'
export declare function updateAttributes(
	user:CognitoUser,
	attribute_a:ICognitoUserAttributeData[]
):Promise<string>
