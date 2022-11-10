function solution(seoul) {
    let a=0
    seoul.forEach((item,idx)=>{if(item==='Kim'){return a+=idx}})
    return `김서방은 ${a}에 있다`
    
}