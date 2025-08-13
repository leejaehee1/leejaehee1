import * as M from '../mongodb'

const connectCB = async (db: M.MongoDB) => {
  try {
    const user = db.collection('user')

    await user.updateOne(
      {name: {$regex: /^J.*$/}},
      {$set: {name: 'John'}, $inc: {age: 10}}
    )
    const udateOneResult = await user.find({}).toArray()
    console.log('udateOneResult', udateOneResult)

    await user.updateMany({name: {$regex: /^J.*$/}}, {$inc: {age: 10}})
    const updateManyResult = await user.find({}).toArray()
    console.log('updateManyResult', updateManyResult)

    const findOneResult = await user.findOneAndUpdate(
      {name: 'John'},
      {$set: {age: 66}},
      {returnDocument: 'after'}
    )
    console.log('findOneResult', findOneResult)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

const UpeateTest = () => {
  M.connectAndUseDB(connectCB, 'ch07', 'mongodb://192.168.0.20:27017')
}
UpeateTest()
