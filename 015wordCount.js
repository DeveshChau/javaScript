// word count of arrays with higher order methods
const wordCheck = ['test','jump','run']
const wordList = ['jump', 'test', 'run', 'fun', 'test', 'run']

const countWords = function (words, Compair) {
    return words.map(word => {
        return Compair.reduce((acc, val) => {
            if(val.toLowerCase() === word.toLowerCase()) {
                acc[word]++
            }
            return acc
        }, {[word]: 0})
    })
}

console.log(countWords(wordCheck, wordList));