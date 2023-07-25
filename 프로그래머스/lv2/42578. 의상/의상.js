function solution(clothes) {
    const dic = {}
    clothes.forEach(item => {
        const [cloth, category] = item
        if(dic[category] === undefined) {dic[category] = 1}
        else {dic[category]+=1}
    })
    return Object.values(dic).reduce((acc,cur) => acc * (cur+1),1)-1
}