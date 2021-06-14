export async function globalSignOut(user) {
    return new Promise((resolve, reject) => {
        user.globalSignOut({
            onSuccess: resolve,
            onFailure: reject,
        });
    });
}
//# sourceMappingURL=src/globalSignOut.js.map