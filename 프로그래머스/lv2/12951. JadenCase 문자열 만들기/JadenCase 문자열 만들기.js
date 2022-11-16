function solution(s) {
    const answer = s
    .toLowerCase()
    .split(" ")
    .map(item=>item===""? item : item[0].toUpperCase()+item.substring(1)).join(" ")
    return answer
}