function solution(sizes) {
    const sizesMax = Math.max(...sizes.flat())
    const arr = sizes.map(item=>{
        const [num1, num2] = item
        if(num1>=num2) return num2
        return num1
    })
    return sizesMax * Math.max(...arr)
}