function solution(n, arr1, arr2) {
    const first = binary(arr1,n)
    const second = binary(arr2,n)
    return first.map((i,idx1)=>{
        return [...i].map((j,idx2)=>{
            if([j,second[idx1][idx2]].some(item=>item==='1')) return '#'
            return " "
        }).join("")
    })
}

function binary(arr,n){
    const  returnArray = arr.map(item=>{
        let binary = item.toString(2)
        while(binary.length<n){
            binary = "0" + binary
        }
        return binary
    })
    return returnArray
}