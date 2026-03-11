
let marks=[95,75,34,65]
let small
for(let i=0;i<marks.length;i++){
if (marks[i]<marks[i+1]){
    small=marks[i]
}
}
console.log("small:",small)