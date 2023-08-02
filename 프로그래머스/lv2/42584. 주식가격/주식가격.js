function solution(prices) {
    prices.reverse()
    const answer = []
    while(0 < prices.length){
        const target = prices.pop()
        let count = 0
        for (let i = prices.length-1; i>=0; i--){
            count ++
            if (prices[i] < target ){
                break
            }
        }
        answer.push(count)
    }
    return answer
}