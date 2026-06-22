import app from './app.js'
import { Config } from './config/index.js'
import logger from './config/logger.js'

console.log(Config.PORT)

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => {
            logger.error('error layaaaaaaa gaya')
            // logger.warn('testing eerror log')
            logger.info('Server Listening on port', { port: PORT })
        })
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

startServer()
