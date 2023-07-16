function solution(s) {
    const stack = []
    return [...s].map((item,idx)=>{
        if (!stack.includes(item)) {
            stack.push(item)
            return -1
        }else{
            const index = findIndex(stack,item)
            stack.push(item)
            return idx - index
        }
    })
}

const findIndex = (arr, value) =>{
    const temp = []
    arr.forEach((item,idx)=>{
        if (value===item) temp.push(idx)
    })
    return temp[temp.length-1]
}
