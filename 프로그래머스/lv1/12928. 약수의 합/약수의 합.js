function solution(n) {
    const arr = new Array(n)
    let sum = 0;
    arr.fill(0)
    arr.map((item,idx)=>{arr[idx]=idx+1})
    arr.forEach((number)=>{
        if(n%number==0){
            sum=sum+number;
        }
    })
    return sum
}