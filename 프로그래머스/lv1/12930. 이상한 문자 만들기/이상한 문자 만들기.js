function solution(s) {
    const arr = s.split(" ")
    return arr.map(item=>{
        return item.split("")
            .map((item,idx)=>{
            if(idx%2===0) return item.toUpperCase()
            return item.toLowerCase()
        }).join("")
    }).join(" ")
}