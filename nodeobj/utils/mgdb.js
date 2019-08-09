let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;//创建客户端	
let ObjectID = mongodb.ObjectID;

module.exports = ({
  url='mongodb://127.0.0.1:27017',
  dbName = 'news',
  collectionName 
},callback) => {

  //创建链接	
  mongoCt.connect(url,{ useNewUrlParser: true },(err,client)=>{

    if(!err){
      //链库
      let db = client.db(dbName);

      //链接表
      let collection = db.collection(collectionName);

      //查询
      callback(collection,client,ObjectID)

    }else{
      console.log('链接mongodb服务端失败')
    }

  })
}
