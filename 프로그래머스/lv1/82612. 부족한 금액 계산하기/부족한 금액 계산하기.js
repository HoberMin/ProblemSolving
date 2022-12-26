function solution(price, money, count) {
    let i = 1
    let sum = 0
    while(i<=count){
        sum += price*i
        i++
    }
    return money>=sum ? 0 : sum-money;
}