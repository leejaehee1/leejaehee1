import * as M from '../mongodb'

const connectDB = async (db: M.MongoDB) => {
  try {
    const user = db.collection('user')

    const deleteOneResult = await user.deleteOne({name: {$regex: /^J.*$/}})
    console.log('deleteOneResult', deleteOneResult)

    const deleteManyResult = await user.deleteMany({name: {$regex: /^J.*$/}})
    console.log('deleteMayResult', deleteManyResult)

    const deleteAllResult = await user.deleteMany({})
    console.log('deleteAllReult', deleteAllResult)

    const userDocuments = await user.find({}).toArray()
    console.log('userDocuments', userDocuments)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

const deleteTest = () => {
  M.connectAndUseDB(connectDB, 'ch07', 'mongodb://192.168.0.20:27017')
}

deleteTest()
