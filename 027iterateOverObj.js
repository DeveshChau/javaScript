let obj = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
	"topping":
		[   1,2,3,
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
}
const isObject = function(val) {
    if (val === 'null') {
        return false
    }
    return (typeof val === 'object') 
}
const objProps = function(obj, originalProp) {
    for(let val in obj) {
        if(isObject(obj[val])) {
            objProps(obj[val], val)
        } else {
            if(Array.isArray(obj)) {
                console.log(originalProp + val, obj[val]);
            } else {
                console.log(val, obj[val]);
            }
        }
    }
}
objProps(obj)