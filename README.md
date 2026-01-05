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



4. ## Encryption

- encryption/ decryption

5. ## Hashing

- one way encryption
- password = #%^#$**12312&*#@
- same if ur password was hello to check in using cryptography
- if both text hash = password hash u get login.
- but it has flaws if other user has also same password easier to compare.

6. ## Salt
- Extra addition character added to hash
- Salt change hashed pw.
 


 7. ## JSON web token JWT
  - when user logged in it create unique token of auth User. (logged in).
  - It has 3 parts
  - Header | Body | Signature
  
8. ## Session Storage, Local Storage, Cookie
-  Store the created Token
- Cookie is kind of storage unit where we can save data in server and browser. Cookie (4 KB)  size is less compared to Session(5MB-10MB)
- Cookie is active all the session. (Available throughout the browser).
- Cookie can be shared to request header.
- We can set expiry date.
- Session and local storage can be store in Server. can be stored in only browser. Expires when we close tab.






