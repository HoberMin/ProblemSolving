function solution(number, limit, power) {
    let answer = 0
    for (let i=1; i<=number; i++){
        const attack = checkDivisor(i)
        answer += attack>limit ? power : attack
    }
    return answer
}

const checkDivisor= (num) => {
    if (num===1) return 1
    let i = 1
    let count = 0
    for (i; i<=num**0.5; i++){
        if (num%i===0) count += 2
    }
    if (num**0.5 === parseInt(num**0.5)) count -= 1
    return count
}