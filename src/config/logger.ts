import winston from 'winston'
import { Config } from './index.js'

const logger = winston.createLogger({
    level: 'info',

    // ye bydefault har log ke sath attach hoke ayega taki hame samaj aye ki log kahase aaya hai..
    defaultMeta: {
        servceName: 'auth-service',
    },

    // log store karne ka path batana hota hai..
    transports: [
        new winston.transports.File({
            level: 'info',
            dirname: 'logs',
            filename: 'combined.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === 'test',
            // silent: true,
            // logs track nahi honge, silent true karne se.
        }),
        new winston.transports.File({
            level: 'error',
            dirname: 'logs',
            filename: 'error.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === 'test',
        }),
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === 'test',

            // yaha node env test hoga means true aur true means no logging.
        }),
    ],
})

export default logger
