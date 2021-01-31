import { CognitoUser, ICognitoUserData } from 'amazon-cognito-identity-js'
import { Pool } from './Pool'
export function _cognito_user(Username:string) {
	return new CognitoUser(_UserData(Username))
}
function _UserData(Username:string):ICognitoUserData {
	return {
		Username,
		Pool,
	}
}
