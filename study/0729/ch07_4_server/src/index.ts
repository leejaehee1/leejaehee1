import {createServer} from 'http'
import {getPublicDirPath} from './config'
import {makeDir} from './utils'
import {createExpressApp} from './express'
import type {MongoDB} from './mongodb'
import {connectAndUseDB} from './mongodb'

makeDir(getPublicDirPath())

const connectCallback = (db: MongoDB) => {
  const hostname = '0.0.0.0',
    port = 4000

  createServer(createExpressApp(db)).listen(port, hostname, () =>
    console.log(`connect http://${hostname}:${port}`)
  )
}

connectAndUseDB(connectCallback, 'mydb', 'mongodb://localhost:27017')
