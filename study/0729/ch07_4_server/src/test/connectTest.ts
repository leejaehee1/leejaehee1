import * as M from '../mongodb'

const connectCB = (db: M.MongoDB) => {
  console.log('db', db)
}

const connectTest = () => {
  M.connectAndUseDB(connectCB, 'ch07', 'mongodb://192.168.0.20:27017')
}

connectTest()
