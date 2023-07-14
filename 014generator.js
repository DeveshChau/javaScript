// Generator function in javascript
// yield keywords puases function execution and resumes on next method

let scores = [30,40,50,20,10,60,70,90,100]

function* randomElement(arr) {
    let ele,len = arr.length
    while(len>0) {
        let rand = Math.floor(Math.random()*len)
        ele = arr.splice(rand, 1)[0]
        len = arr.length
        yield ele
    }
}

const randScore = randomElement(scores);