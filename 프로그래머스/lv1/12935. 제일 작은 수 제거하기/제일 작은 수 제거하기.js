function solution(arr) {
    const filterArr = [...arr]
    const minItem = arr.sort((a,b)=>b-a).pop()
    const answer = filterArr.filter((item)=>item!==minItem)
    return answer.length === 0 ? [-1] : answer
}