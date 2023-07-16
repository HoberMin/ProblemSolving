function solution(name, yearning, photo) {
    const dic = {}
    name.forEach((item,idx) => dic[item] = yearning[idx])
    
    return photo.map(item => (
        item.reduce((acc,cur) => {
            if (dic[cur] === undefined) return acc+0
            else return acc + dic[cur] }, 0
        )
    ))
}