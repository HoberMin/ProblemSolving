function solution(d, budget) {
    let sum = 0
    return d.sort((a,b)=>a-b).filter(item=>{
        sum+=item
        if(sum<=budget) return item
    }).length
}