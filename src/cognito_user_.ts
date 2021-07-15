import { CognitoUser, ICognitoUserData } from 'amazon-cognito-identity-js'
import { Pool } from './Pool.js'
export function cognito_user_(Username:string):CognitoUser {
	return new CognitoUser(UserData_(Username))
}
function UserData_(Username:string):ICognitoUserData {
	return {
		Username,
		Pool,
	}
}
