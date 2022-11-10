function solution(box, n) {
    
    return box.map((item)=> parseInt(item/n)).reduce((sum,cur)=>sum*cur,1);
}