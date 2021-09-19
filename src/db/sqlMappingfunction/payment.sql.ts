import { executeQuery } from "../client";

export async function createPayment(userId : string, address: string){
    try {
        const {insertId : id} = await executeQuery(`INSERT INTO payment(user_id, address) VALUES(${userId}, "${address}")`)
        const result = {
            paymentId : id,
            userId,
            address,
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
    } catch (error) {
        console.log(error);
    }
}

export async function addTxid(paymentId : string, txid : string){
    try {
        const result = await executeQuery(`UPDATE payment set txid = "${txid}", status = 1 WHERE payment_id = ${paymentId}`);
        return result;
    } catch (error) {
        console.log(error);
    }
}