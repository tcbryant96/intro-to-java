console.log("Hello Trevor")

let arr = [1, 2, 3, 5, 6, 7]

for (let i = 0; i < arr.length; i++){
    if (arr[i+1] - arr[i]== 1){
        console.log(arr[i])
    }  else{
        break
    }
}


for (let i = 0; i < arr.length; i++){
    if (i+1 == arr[i]){
        console.log(arr[i])
    }  else{
        break
    }
}
let lst =[10, 12, -9, 3, -1, 0, 15] 
let x =0
for (let i = 0; i <lst.length; i++){
    if (lst[i]> 0){
        (x+=lst[i])
    }
}
console.log(x)


