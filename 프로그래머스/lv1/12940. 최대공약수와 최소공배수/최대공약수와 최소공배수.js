function solution(n, m) {
    const divisorN = divisor(n) //[1,3]
    const divisorM = divisor(m) //[1,2,3,4,6,12]
    let GCD = Math.max(...divisorN.filter(item=>divisorM.includes(item)))
    return [GCD,n*m/GCD]
}

function divisor(number){
    const arr = []
    for(let i=0; i<=number; i++){
        if(number%i===0) arr.push(i)
    }
    return arr
}

//15 27 [1,3,5,15] [1,3,9,27] =>3,5,9