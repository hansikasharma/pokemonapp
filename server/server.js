
const mongoose = require('mongoose');
const uri = "mongodb+srv://jerkinvestor:whvNjR0lLg1Wmt9h@cluster0.f2zcvfe.mongodb.net/?retryWrites=true&w=majority";
const express = require('express');
const app = express();
var cors = require('cors');
const UserRouter = require('./routes/UserRoutes')
const TeamRouter = require('./routes/TeamRoutes')
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
app.use(express.json());
app.use(cors(
  {
    origin: ["https://pokemonapp-beige.vercel.app","http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
  }
));
app.use('/api/v1/user', UserRouter);
app.use('/api/v1/team', TeamRouter);

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(err){
    console.log(err);
  }
}
run()
app.listen(3000,()=>{console.log('server on port 3000')})
