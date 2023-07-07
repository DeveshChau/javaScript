// shuffle given array.
function shuffleArray(arr) {
    for(let i=arr.length - 1; i>0; i--) {
        let newPos = Math.floor(Math.random()*(i+1))
        let temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos]=temp
    }
    return arr
}

let newArr = shuffleArray([1,2,3,4,5,6])
console.log(newArr);