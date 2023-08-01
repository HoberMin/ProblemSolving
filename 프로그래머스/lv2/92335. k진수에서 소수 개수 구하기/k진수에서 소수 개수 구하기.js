function solution(n, k) {
    const temp = n.toString(k).split("0").filter(item => binaryCheck(+item))
    return temp.length
}

const binaryCheck = (num) => {
    if (num === 1 || num === 0) return false
    if (num === 2) return true
    let i = 2
    while(i <= num**0.5){
        if (num%i === 0) return false
        i++
    }
    return true
}