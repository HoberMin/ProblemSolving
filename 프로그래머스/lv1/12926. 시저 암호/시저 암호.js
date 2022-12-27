function solution(s, n) {
    const arr = s.split("").map(item=>{
        let ascii = item.charCodeAt()
        if(item === " ") return ascii
        if(ascii<=90 && ascii+n>90) return ascii+n-26
        if(ascii>=97 && ascii+n>122) return ascii+n-26
        return ascii+n
    })
    return String.fromCharCode(...arr)
}