const  mongoose = require("mongoose");
//const DB = process.env.DATABASE;

// connection with the database online in mogodb atlas */
// yee online wala tha yee chl nhii rhaa isliyee mongodb cpmpass se chlaay
/*  mongoose.connect(DB,{useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  }).then(()=>{
    console.log("connection successful");
  }).catch((err)=>{
    console.log("connection failed");
  });// online database se connect krdegaa
  //yee abhi chl nhi rha Atlas wala
 */

  // yee h ofline database ka  yee h Compass walla
  mongoose.connect("mongodb://localhost:27017/task",{ useNewUrlParser:true,
}).then(()=>{
  console.log("connection successful");
}).catch((err)=>console.log("connection failed"));
   
