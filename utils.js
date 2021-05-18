export function findById(someArray, someId) {
    const numberId = Number(someId);
    for (let item of someArray) {
        if (item.id === numberId) {
            return item;
        }
    }
    return null;
}