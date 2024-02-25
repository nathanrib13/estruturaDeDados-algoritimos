const pagesPerDay = [
    30,90,40,30, 33, 37,55,57,33,25,10,32,36,11,20,30,
    52,20,26,4,1,7,38,39,25,28,19,10,5,18,9,22,12,9,0,
    7,9,28,47
]
const daysReading = pagesPerDay.length
const pagesRead = pagesPerDay.reduce((accumulator, currenteValue)=>accumulator + currenteValue)

function getAvrgPages(totalRead, days){
    return Math.floor(totalRead/days)
}

function getHigherDay(arrayOfPagesPerDay){
    const mostReadInADay = Math.max(...arrayOfPagesPerDay) //using spread 
    return mostReadInADay
}


console.log("A média de paginas lida é de:",getAvrgPages(pagesRead, daysReading), "paginas")
console.log("O recorde de paginas lidas em um dia é de:",getHigherDay(pagesPerDay), "paginas")
console.log("O total de paginas lidas é de:",pagesRead, "paginas")
console.log("Sua sequencia de dias lendo é de:", daysReading,"dias")
