// Find max date from given array of dates
let dateArr = [new Date('2023 2 15'), new Date('2023 5 15'), new Date('2020 10 28'), new Date('2023 4 15')]
const maxDate = (arr)  => new Date(Math.max(...arr))
console.log(maxDate(dateArr));