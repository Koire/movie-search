const shuffleArray = (array) => {
    let result = array.slice(0)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result
}
console.log(shuffleArray([
    "pike",
    "sunagawa",
    "suzuki",
    "kinjo",
    "takahashi",
    "okayama",
    "koizumi"
]))