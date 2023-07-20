function solution(n, lost, reserve) {
    lost.sort()
    reserve.sort()
    let realLost = lost.filter(element => !reserve.includes(element))
    let realReserve = reserve.filter(element => !lost.includes(element))
    const sucessReserve = []
    realLost.forEach(item =>{
        if (realReserve.includes(item-1)) {
            realReserve = realReserve.filter(element => element !== item -1)
            sucessReserve.push(item-1)
        }
        else if(realReserve.includes(item+1)){ 
            realReserve = realReserve.filter(element => element !== item + 1)
            sucessReserve.push(item+1)
        }
    })
    
    const set = new Set(sucessReserve)
    return Math.min((n - realLost.length + set.size),n)
                
}


// 1. reverse / lost에서 중복되면 제거한다.
