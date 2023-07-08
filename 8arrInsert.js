// insert data in array after every given element
function insertData(arr, data, pos) {
    return arr.flatMap((val, idx) => (idx+1)%pos == 0 ? [val,data] : val)
}

console.log(insertData([1,2,3,4,5,6], 0, 3))