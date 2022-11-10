function solution(seoul) {
    let a = 0;
    seoul.forEach((item,idx)=>{if(item==="Kim"){
        a+=idx}return a} )
    return `김서방은 ${a}에 있다`;
}