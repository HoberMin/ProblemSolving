process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const arr = new Array(a).fill("*").join("")
    let i = 1
    while(i<=b){
        console.log(arr)
        i++
    }
    
});