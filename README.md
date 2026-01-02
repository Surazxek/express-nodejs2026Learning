## MongoDB

- Non-relation  database
- Collection is equivalent to table in SQL.
- Document (row)
- Filed () is each column.



- Schema (Data Structure)
- Models (using Schema we make Model)
- 


#  MongoDB Tools
- Shell - Terminal to use for shell.
- compass - Local GUI
- Atlas - For Remote Cloud 


### mongoDB commands
1. mongosh : Connect with local MongoDB instance.
2. show dbs : shows lists of databases.
3. cls : clear the screen.
4. use <dbnamee> to go inside database .
5.  use node-20251229 this didn't exist show  node mongodb created new db. and it should have 1 collection tos show.
6. show collection : it will not show if there is empty database.

**Create**
1. insertOne 
- db.<collectionName>.insertOne()
- for e.g: db.users.insertOne({name: "Suraj"})

2. insertMany
- db.<collectionName>.insertMany()
- for eg. db.users.insertMany([{name: "Jerry"}, {name: "Tom"}])
-  insert multiple value db.users.insertOne({name: "hari", age: 31, address: "Dharan"})

**Read**
1. find()
- db.<CN>.find()
- db.user.find()d

2. find(<filterObject>)
- db.users.find({name: "Suraj"})

**Update**
- db.<CollectionName>.updateOne()
- for example db.users.updateOne({name: "ram}, {$set: {age: 35}})

**Delete**
- db <colletionName>.deleteOnne()
- eg. db.users.deleteOne({name: "Ram"})

***Complex Filter**
1. $gt/$gte
- db.users.find({age: {$gt: 12}})

2. $lt/$lte
   same

3. $eq/$ne : equal or not equal 

