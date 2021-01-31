import type { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js'
export async function getUserAttributes(user:CognitoUser):Promise<CognitoUserAttribute[]> {
	return new Promise((resolve, reject)=>{
		user.getUserAttributes((err, result)=>{
			if (err) {
				reject(err)
				return
			}
			resolve(result as CognitoUserAttribute[])
		})
	})
}
