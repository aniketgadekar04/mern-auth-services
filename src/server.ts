import app from './app.js'
import { Config } from './config/index.js'

console.log(Config.PORT)

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => console.log('listening'))
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

startServer()
