import {MongoClient, Db} from 'mongodb'

export type MongoDB = Db
export type ConnectCallback = (db: MongoDB) => void

export const connectAndUseDB = async (
  callback: ConnectCallback,
  dbName: string,
  mongoUrl: string = 'mongodb://localhost:27017'
) => {
  let connection
  try {
    connection = await MongoClient.connect(mongoUrl) // 몽고 DB와 연결
    const db: Db = connection.db(dbName) // 몽고셸의 'use dbName'에 해당
    callback(db) // db 객체를 콜백 함수의 매개변수로 호출
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message)
    }
  }
}
