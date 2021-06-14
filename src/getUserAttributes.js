export async function getUserAttributes(user) {
    return new Promise((resolve, reject) => {
        user.getUserAttributes((err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}
//# sourceMappingURL=src/getUserAttributes.js.map