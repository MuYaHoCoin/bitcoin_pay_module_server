import mysql, { QueryFunction } from 'mysql'
import * as dotenv from 'dotenv';
dotenv.config();

const client = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

export function executeQuery(query: string):Promise<any>{
    return new Promise((resolve, reject)=>{
        client.query(query,(error,results,field)=>{
            if(error) reject(error);
            resolve(results);
        })
    })
}

export default client