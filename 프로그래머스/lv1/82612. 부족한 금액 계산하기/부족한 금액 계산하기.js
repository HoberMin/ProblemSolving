function solution(price, money, count) {
    const sum = price * count * (1+count)/2
    return money>=sum ? 0 : sum-money;
}