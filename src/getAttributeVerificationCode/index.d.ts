import type { CognitoUser } from 'amazon-cognito-identity-js'
import type { inputVerificationCode_fn_T } from '../_types'
export declare function getAttributeVerificationCode(
	user:CognitoUser,
	inputVerificationCode:inputVerificationCode_fn_T
):Promise<null>
