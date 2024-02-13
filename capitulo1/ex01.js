const number = 1 
console.log(typeof(number),number)

function testeTruthy(value){
    return value ? console.log('truthy') : console.log("falsy")
}
 
testeTruthy(0)

        