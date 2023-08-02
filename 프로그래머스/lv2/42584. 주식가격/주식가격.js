function solution(prices) {
    const answer = []
    prices.reverse()
    while (0 < prices.length){
        let count = 0
        const target = prices.pop()
        for (let i = prices.length-1; i>=0; i--){
            count ++
            if (prices[i] < target){
                break
            }
        }
        answer.push(count)
    }
    return answer
}