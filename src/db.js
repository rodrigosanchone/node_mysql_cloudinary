import { createPool } from "mysql2/promise";

import {
    DB_HOST,
    DB_DATABASE,
    DB_PORT,
    DB_USER,
} from './config.js'

export const conexion = createPool(
    {
        host: DB_HOST,
        user: DB_USER,
        port: DB_PORT,
        database: DB_DATABASE,
        
    }
)

conexion.query