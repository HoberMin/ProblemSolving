function solution(cards1, cards2, goal) {
    let cards1Index = 0
    let cards2Index = 0
    let goalIndex = -1
    let answer = "Yes"
    while(goalIndex !== goal.length-1){
        goalIndex += 1
        if (cards1[cards1Index] === goal[goalIndex]){
            cards1Index += 1
            continue
        }
        if(cards2[cards2Index] === goal[goalIndex]){
            cards2Index += 1
            continue
        }
        answer = "No"
    }
    return answer
}