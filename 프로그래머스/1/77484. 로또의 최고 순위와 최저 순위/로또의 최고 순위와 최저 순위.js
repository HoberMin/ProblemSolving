function solution(lottos, win_nums) {
    lottos.sort((a,b) => a-b)
    win_nums.sort((a,b) => a-b)
    const lottoPrize = {
        0 : 6,
        1 : 6,
        2 : 5,
        3 : 4,
        4 : 3,
        5 : 2,
        6 : 1
    }
    
    let zero = 0
    let collectNumber = 0
    
    lottos.forEach(e => {
        if (e === 0) return zero += 1
        if (win_nums.includes(e)) return collectNumber += 1
    })
    
    return [lottoPrize[collectNumber + zero], lottoPrize[collectNumber]]
    
}