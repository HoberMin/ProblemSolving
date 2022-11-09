function solution(s){
    const py = {p:0 , y:0}
    const arr = (s+"").split("")
    arr.forEach(item => {
        if(item==='p'|| item==='P'){
            return py.p += 1
        }
        if(item === 'y'|| item ==='Y'){
            return py.y +=1
        }
    })
    return py.y-py.p===0 ? true : false
}