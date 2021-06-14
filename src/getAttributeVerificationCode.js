export async function getAttributeVerificationCode(user, inputVerificationCode) {
    return new Promise((resolve, reject) => {
        user.getAttributeVerificationCode('email', {
            onSuccess() {
                resolve(null);
            },
            onFailure(err) {
                reject(err.message || JSON.stringify(err));
            },
            inputVerificationCode,
        });
    });
}
//# sourceMappingURL=src/getAttributeVerificationCode.js.map