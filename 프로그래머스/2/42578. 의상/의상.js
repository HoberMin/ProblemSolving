function solution(clothes) {
    const konyClothes = {}
    
    clothes.forEach(e => {
        const [item, clothObject] = e
        konyClothes[clothObject] ? konyClothes[clothObject].push(item) : konyClothes[clothObject] = [item]
    })
    
    const answer = Object.values(konyClothes).reduce((acc,cur) => acc * (cur.length + 1), 1)
    
    return answer - 1
}