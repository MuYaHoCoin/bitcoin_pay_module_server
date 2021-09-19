import mysql, { QueryFunction } from 'mysql'

const client = mysql.createConnection({
    host: 'localhost',
    user: 'bitcoin_payment_module',
    password: '1234',
    database: 'payment_schema'
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