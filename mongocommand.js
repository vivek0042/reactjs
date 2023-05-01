const { syncBuiltinESMExports } = require("module")

// inserting data in mangodb
// use vivekmart

// inserting single item
db.items.insertOne({name:"fortune soya chunks",price:120,weight:1,qty:1,sold:33})

// inserting many items.
db.items.insertMany([{name:"fortune besan",price:80,weight:1,qty:1,sold:10},{name:"fortune kaju",price:800,weight:1,qty:1,sold:98},{name:"fortune almonds",price:800,weight:1,qty:1,sold:88},{name:"fortune soya chunks",price:120,weight:1,qty:1,sold:33}])

// for find particular object in database
db.items.find({price:120})

// use less than and greater than:
db.items.find({price:{gte:120}})

// use and operator:
db.items.find({price:{$gt:120,sold:{$lte:22}}})

// use or operator
db.items.find({$or:[{price:{$gt:33}},{sold:{$gt:9}}]})

// for deleting the data
db.items.deleteOne({price:120})

// for entering another collections(in our tutorial we use items)
db.anothorCollection.insertOne({a:80})   //"anothorCollection is collection name(collection is table in rdbms)"

// for updating one items
db.items.updateOne({name:"tirupati oil"},{$set:{price:2399}})
// same for updating many items with help of updateMany.