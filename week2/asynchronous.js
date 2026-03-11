// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
//         After 2 seconds → show: “Evaluating answers…”
//         After 4 seconds → show: “Result: Pass”

console.log("Exam submitted successfully")
setTimeout(()=>{
console.log("Evaluating answers...")
},2000)
setTimeout(()=>{
console.log("Result: Pass")
},4000)


// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

console.log("OTP sent successfully")
console.log("enter in 10 seconds")

let seconds=10

let intervalId=setInterval(()=>{
seconds--
console.log(`otp resend in ${seconds}`)

if(seconds===0){
clearInterval(intervalId)
console.log(" resend OTP?")
}
},1000)