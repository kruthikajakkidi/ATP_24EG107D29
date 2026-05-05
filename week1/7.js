function index(arr,ele){
    for(let i=0;i<arr.length;i++){
        if (arr[i]==ele){
            return i   
        }
    }
     return "not found"
}
search=index([3,6,9,9,34],9)
console.log(search)