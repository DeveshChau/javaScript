// Display given time in "0000:00:00:00" format
function displayTime(mili) {
    let time = new Date();
    time.setTime(mili);
    console.log(Math.floor(time/(1000*60*60)).toString().padStart(4,'0')+':'+
        Math.floor(time/(1000*60)).toString().padStart(2,'0')+':'+
        time.getSeconds().toString().padStart(2,'0')+':'+
        time.getMilliseconds().toString().padStart(2,'0')+':')
}
displayTime(1001)