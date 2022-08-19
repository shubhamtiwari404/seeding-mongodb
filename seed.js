const mongoose = require("mongoose");
const Product = require("./model/user");
const Profile = require("./model/profile");
const { getObjectId } = require("mongo-seeding");
const { profile } = require("console");
// const faker = require("faker");


mongoose.connect('mongodb+srv://admin:admin@cluster0.5v8vbhu.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
});

const names = ["Sohan", "Mohan", "Ram", "Shyam", "Dayal", "Kavin", "Aditi", "Aryan", "Peter", "Rajan"];

const min = 18;
const max = 100;

 const seedProducts = names.map(name => ({
    name: name,
    age: Math.floor(Math.random() * (max - min + 1)) + min,
    _id: getObjectId(name),
}))
const seedProfile = names.map(name => ({
    name: name,
    type: "user",
    _id: getObjectId(name)
}))

const seedDB = async () => {
    // await Product.remove({});
    await Product.insertMany(seedProducts);
    await Profile.insertMany(seedProfile);
}
seedDB().then(()=>{
    mongoose.connection.close();
})





       

       

            

        