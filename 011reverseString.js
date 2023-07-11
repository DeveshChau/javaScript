// reverse only characters from string and not the special char
let str = "as@df#gh$jk"
const getIndex = function(str) {
    return [...str].reduce((acc,item,idx) => {
        let code = item.charCodeAt();
        (code >=65 && code <= 90) || ( code >=97 && code <= 122) ?
        acc.letter.push(idx) :
        acc.spChar.push(idx)
        return acc
    }, {letter: [], spChar: []})
}

const reverseOnlyChar = function(str) {
    let indexObj = getIndex(str)
    return [...str].reduce((acc,val) => {
        let code = val.charCodeAt();
        (code>=65&&code<=90) || (code>=97&&code<=122) ?
        acc[indexObj.letter.pop()] = val :
        acc[indexObj.spChar.shift()] = val
        return acc
    }, []).join('')
}

console.log(reverseOnlyChar(str))