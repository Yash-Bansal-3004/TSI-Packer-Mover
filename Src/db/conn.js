const mongoose =require("mongoose");
url="mongodb+srv://PackerMover:PackerMover@cluster0.krqjndk.mongodb.net/packermover?retryWrites=true&w=majority"
mongoose.connect(url,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
//   useCreateIndex:true
}).then(()=>{
    console.log(`connection successfull`);
}).catch((e)=>{
    console.log(`no connection ${e}`);
})