export function shuffleArray(arr) {
    return arr
        .map(it => ({value: it, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(it => it.value)
}