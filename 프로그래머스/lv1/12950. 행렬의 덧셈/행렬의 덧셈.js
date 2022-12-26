function solution(arr1, arr2) {
     return arr1.map((item,idx)=>{
        //item = [1,2] arr2 = [[34][56]]
         return item.map((num,idx2)=>num+arr2[idx][idx2])
         
    })
}