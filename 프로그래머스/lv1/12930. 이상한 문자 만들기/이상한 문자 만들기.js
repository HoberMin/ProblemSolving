function solution(s) {
    const arr = s.split(" ")
    return arr.map(i=>i.split("").map((j,idx)=> idx%2 ? j.toLowerCase() : j.toUpperCase()).join("")).join(" ")
}