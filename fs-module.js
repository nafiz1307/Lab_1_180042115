//Synchronous and Asynchronous Function

//readFile
//writeFile
//AppendFile
//Delete
//Rename

const fs = require("fs");

// fs.readFileSync
// fs.readSync

// fs.writeFileSync("./contents/demoFile.txt","We are learning Node.js ");
// fs.appendFileSync("./contents/demoFile.txt","We learnt javascript");

// fs.rename("./contents/demoFile.txt","./contents/renamedFile.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Rename Successful!");
//     }
// });

// fs.readFile("./contents/renamedFile.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });


// console.log("before");

// fs.readFile("./contents/renamedFile.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.appendFile(
//       "./contents/renamedFile.txt",
//       "Checking Syncrhonous process"
//     );
//     fs.readFile("./contents/renamedFile.txt", "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       }else{
//           console.log(data);
//       }
//     });
//   }
// });

// fs.readFile("./contents/renamedFile.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         fs.appendFile(
//             "./contents/renamedFile.txt",
//             "Checking Synchronous Process",
//             (err)=>{console.log(err);}
//         );
//         fs.readFile("./contents/renamedFile.txt", "utf-8",(err,data)=>{
//             if(err){
//                 console.log(err);
//             } else{
//                 console.log(data);
//             }
//         });
//     }
// });

// console.log("after");

fs.unlink("./contents/renamedFile.txt",(err)=>{
    if(!err)console.log("Deleted Successfully")
});
