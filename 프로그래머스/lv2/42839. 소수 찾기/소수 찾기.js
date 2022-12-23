function solution(numbers) {
    const answer = []
    let length = numbers.length
    while(length>=1){
        answer.push(...makeNum([...numbers],length))
        length-=1
    }
    const unique = new Set(answer.map(v=>+v))
    const uniqueArray = [...unique].sort()
    return isPrime(uniqueArray).length
}

function isPrime(arr){
    const answer =  arr.filter(item=>{
        if(item<=1) return false
        for(let i =2; i<=Math.sqrt(item);i++){
            if(item%i===0) return false
        }
        return true
    })
    return answer
}
                              
function makeNum(arr,length){
    const results = [];
    if (length === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)]  
      const permutations = makeNum(rest, length - 1); 
      const attached = permutations.map((el) => [fixed, ...el].join("")); 
      results.push(...attached); 
    });
    return results; 
}