function solution(n) {
    const oneNumber = oneCount(n.toString(2))
    while(n<1000000){
        n+=1
        let oneNumber2 = oneCount(n.toString(2))
        if(oneNumber2 === oneNumber){
            return n
        }
    }
}

function oneCount(binary){
    const oneFiltering = [...binary].filter(item => item==='1')
    return oneFiltering.length
}