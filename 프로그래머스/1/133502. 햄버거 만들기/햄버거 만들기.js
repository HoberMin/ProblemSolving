function solution(ingredient) {
    const stack = [ingredient[0] , ingredient[1] , ingredient[2]]
    let answer = 0
    for (let i=3; i < ingredient.length; i++){
        stack.push(ingredient[i])
        if (stack.slice(-4).join("") === '1231'){
            answer += 1
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
        }
    }
    return answer
}