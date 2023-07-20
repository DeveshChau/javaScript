// Create array object with key as element and values as array of index postion
const scores = [10, 20, 30, 20, 10, 50, 80, 90, 80, 70]

const eleIndex = function (arr, ele) {
    return arr.reduce((acc, val, idx) => {
        if (val === ele) {
            acc[ele] = acc[ele].concat(idx)
        }
        return acc
    }, {[ele]: []})
}

function repeatEle(mainArr) {
    let uniqArr = new Set(mainArr);
    repeatArr = []
    for (const iterator of uniqArr) {
        repeatArr.push(eleIndex(mainArr, iterator))
    }
    return repeatArr
}
console.log(repeatEle(scores));