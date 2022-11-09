function solution(s){
    const py = {p:0 , y:0}
    const arr = (s.toUpperCase()+"").split("")
    arr.forEach(item => {
        if(item==='P'){
            return py.p += 1
        }
        if(item ==='Y'){
            return py.y +=1
        }
    })
    return py.y-py.p===0 ? true : false
}