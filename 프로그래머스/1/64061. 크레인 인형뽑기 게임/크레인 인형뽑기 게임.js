function solution(board, moves) {
    const x = board.length
    const y = board[0].length
    const newBoard = []
    for (let i=0; i<y; i++){
        const temp = []
        for (let j=x-1; j>=0; j--){
            board[j][i] ? temp.push(board[j][i]) : 0
        }
        newBoard.push(temp)
    }
    const stack = []
    let answer = 0
    moves.forEach(e => {
        const doll = newBoard[e-1].pop()
        if (stack[stack.length-1] === doll && stack[stack.length-1] !== undefined){
            stack.pop()
            answer += 2
        }else{
            stack.push(doll)
        }
    })
    
    return answer
}





