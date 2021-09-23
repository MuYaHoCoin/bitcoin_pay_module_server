import { executeQuery } from "../client";

export async function createPayment(userId : string, address: string, price: number){
    try {
        const {insertId : paymentId} = await executeQuery(`INSERT INTO payment(user_id, address, price) VALUES(${userId}, "${address}", ${price})`)
        const result = {
            paymentId,
            userId,
            address,
            price,
            txid: null,
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function getPaymentById(paymentId : string){
    try {
        const result = await executeQuery(`SELECT * FROM payment WHERE payment_id = ${paymentId}`)
        return result[0];
    } catch (error: any) {
        console.log(error.message)
        return {msg : error.message}
    }
}

export async function putTxid(paymentId : string, txid : string){
    try {
        const result = await executeQuery(`UPDATE payment set txid = "${txid}" WHERE payment_id = ${paymentId}`);
        console.log(result);
        return true;
    } catch (error) {
        console.log(error);
        return false
    }
}

export async function getXpubIndex(userId: number) {
    try {
        const result = await executeQuery(`SELECT COUNT(*) FROM payment WHERE user_id = ${userId}`)
        return result[0]['COUNT(*)'];
    } catch (error) {
        console.log(error);
    }
}
