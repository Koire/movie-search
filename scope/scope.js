const outer = () => {
    let x = 0
    return () => {
        x = x + 1
        return x
    }
}
const generator = (generationString) => {
    return (name) => generationString(name)
}

const printHello = generator((name) => `hello ${name}`)
console.log(printHello('Daichi'))
console.log(printHello('Pike'))

