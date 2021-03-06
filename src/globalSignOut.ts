import type { CognitoUser } from 'amazon-cognito-identity-js'
export async function globalSignOut(user:CognitoUser):Promise<string> {
	return new Promise((resolve, reject)=>{
		user.globalSignOut({
			onSuccess: resolve,
			onFailure: reject,
		})
	})
}
