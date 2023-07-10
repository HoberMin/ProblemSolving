function solution(s) {
    const blankArray = s.toLowerCase().split(" ")
    const answerArray = blankArray.map(item=>{
        if (item === "") return ""
        return item[0].toUpperCase()+item.slice(1)
        
    })
    return answerArray.join(" ")
}