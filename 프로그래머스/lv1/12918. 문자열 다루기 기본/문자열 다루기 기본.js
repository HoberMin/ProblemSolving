function solution(s) {
    if ([4,6].includes(s.length)){
        const arr = [...s].filter(item=> Number.isNaN(+item))
        return arr.length === 0
    }else
    {
        return false
    }
}