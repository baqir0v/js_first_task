# js_first_task
let arr = [7,1,2,16,1,1]
let mem;

for (let i = 0; i <= arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i]<arr[j]) {
            mem=arr[j]
            arr[j]=arr[i]
            arr[i]=mem
        }
    }
}
console.log(arr);
