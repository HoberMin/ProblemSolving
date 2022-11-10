function solution(cipher, code) {
    
    return (cipher+"")
        .split("")
        .map((item,idx,arr)=>arr[idx*code-1+code])
        .join("")
}