function solution(lottos, win_nums) {
    const rank = [6,6,5,4,3,2,1]
    
    let zero = 0
    let collectNumber = 0
    
    lottos.forEach(e => {
        if (e === 0) return zero += 1
        if (win_nums.includes(e)) return collectNumber += 1
    })
    
    return [rank[collectNumber + zero], rank[collectNumber]]
    
}