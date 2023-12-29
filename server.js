import os from 'os'
import express from'express';
const app = express();
const port = 3000
const cpuCount = os.cpus().length
console.log("total cpus : ",cpuCount)

app.get('/heavy',(req,res)=>{
let total =0;
for(let i= 0; i <5000; i++){
     total ++;
    }
res.send("task is :",total)

})
app.listen(port,()=>{
    console.log("running on port  : ",port)
    console.log("worker pid  : ",process.pid)


})

// npx loadtest -n -c 50 -k http://localhost:3000/heavy