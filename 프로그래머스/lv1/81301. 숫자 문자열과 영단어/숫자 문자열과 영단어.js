function solution(s) {
    const dic = ['zero','one','two','three','four','five','six','seven','eight','nine']
    dic.forEach((item,idx)=>{
        s = s.replaceAll(item,idx)})
    return +s
}