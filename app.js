const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

const client = new MongoClient(uri);
const dbName = "Blog";

const connectToDatabase = async () => {
    try{
        await client.connect();
        console.log(`Connected to the ${dbName} database`);
    }catch(err){
        console.error(`Could not connect to database : ${err}`)
    }
};

const main = async () => {
    try{
        connectToDatabase();
   }catch(err){
        console.error(`Error connecting to database ${err}`);
   }finally{
        client.close();
   }
};

main();