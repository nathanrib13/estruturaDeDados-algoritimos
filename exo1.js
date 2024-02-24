const pagesPerDay = [20,30,30,89,15,14,35,64,78,97,1,14,12,9,7,6,5,4,3,1,2,0,44]

const pagesRead = pagesPerDay.reduce((accumulator, currenteValue)=>accumulator + currenteValue)

console.log("O total de paginas lidas é de: ",pagesRead)

function getAvrgPages(totalRead, days){
    return totalRead/days
}

function getHigherDay(arrayOfPagesPerDay){
    const mostReadInADay = Math.max(...arrayOfPagesPerDay) //using spread 
    console.log(mostReadInADay)
}



console.log("a média de paginas lida é de:",getAvrgPages(pagesRead, 35))

getHigherDay(pagesPerDay)