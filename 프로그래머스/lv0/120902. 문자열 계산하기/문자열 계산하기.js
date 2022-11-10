function solution(my_string) {
    const arr = my_string.split(" ")
    let sum = +arr[0]
    const answer = arr.forEach((item,idx,arr)=>{
        if(item==='+'){
            return sum +=  +arr[idx+1]
        }
        if(item==='-'){
            return sum += - +arr[idx+1]
        }
    })
    console.log(sum)
    return sum;
}